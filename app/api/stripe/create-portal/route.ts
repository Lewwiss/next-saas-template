import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/next-auth";
import connectMongo from "@/lib/mongoose";
import { createCustomerPortal } from "@/lib/stripe";
import User from "@/models/user";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await connectMongo();

      const body = await req.json();

      const { id } = session.user;

      const user = await User.findById(id);

      if (!user?.customerId) {
        return NextResponse.json(
          {
            error: "You don't have a billing account yet",
          },
          { status: 400 },
        );
      }

      if (!body.returnUrl) {
        return NextResponse.json(
          { error: "Return URL is required" },
          { status: 400 },
        );
      }

      const stripePortalUrl = await createCustomerPortal({
        customerId: user.customerId,
        returnUrl: body.returnUrl,
      });

      return NextResponse.json({
        url: stripePortalUrl,
      });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: e }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
}
