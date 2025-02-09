import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import connectMongo from "@/lib/mongoose";
import User from "@/models/user";
import { findCheckoutSession } from "@/lib/stripe";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: "2024-11-20.acacia",
  typescript: true,
});

const webhookSecret = `${process.env.STRIPE_WEBHOOK_SECRET}`;

export async function POST(req: NextRequest) {
  await connectMongo();

  const body = await req.text();

  const signature = (await headers()).get("stripe-signature") || '';

  let eventType;
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    eventType = event.type;
  } catch (e) {
    console.error(`Webhook signature verification failed: ${e}`);
    return NextResponse.json({ error: e }, { status: 400 });
  }

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        const stripeObject: Stripe.Checkout.Session = event.data.object as Stripe.Checkout.Session;

        const session = await findCheckoutSession(stripeObject.id);

        const customerId = session?.customer;
        const priceId = session?.line_items?.data[0]?.price?.id;
        const userId = stripeObject.client_reference_id;
        const plan = priceId === process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID || priceId === process.env.NEXT_PUBLIC_STRIPE_YEARLY_PRICE_ID;

        if (!plan) break;

        const customer = (await stripe.customers.retrieve(
          customerId as string
        )) as Stripe.Customer;

        let user;

        if (userId) {
          user = await User.findById(userId);
        } else if (customer.email) {
          user = await User.findOne({ email: customer.email });

          if (!user) {
            user = await User.create({
              email: customer.email,
              name: customer.name,
            });

            await user.save();
          }
        } else {
          console.error("Stripe no user found");
          throw new Error("Stripe no user found");
        }

        user.priceId = priceId;
        user.customerId = customerId;
        user.pro = true;
        await user.save();
        break;
      }

      case "checkout.session.expired": {
        break;
      }
      case "customer.subscription.updated": {
        break;
      }
      case "customer.subscription.deleted": {
        const stripeObject: Stripe.Subscription = event.data.object as Stripe.Subscription;

        const subscription = await stripe.subscriptions.retrieve(
          stripeObject.id
        );

        const user = await User.findOne({ customerId: subscription.customer });

        user.pro = false;
        await user.save();

        break;
      }

      case "invoice.paid": {
        const stripeObject: Stripe.Invoice = event.data.object as Stripe.Invoice;

        const priceId = stripeObject.lines.data[0].price?.id;
        const customerId = stripeObject.customer;

        const user = await User.findOne({ customerId: customerId?.toString() });

        if (user.priceId !== priceId) break;

        user.pro = true;
        await user.save();
        break;
      }

      case "invoice.payment_failed":
        break;

      default:
        break;
    }
  } catch (e) {
    console.error("Stripe webhook error: ", e);
  }

  return NextResponse.json({});
}
