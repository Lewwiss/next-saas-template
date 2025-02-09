import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webhook Forms - Terms Of Service",
  description:
    "The quickest way to collect your user feedback, sending responses to your favourite apps.",
};

const Page = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      <Navigation />
      <div className="pt-40 sm:pt-44 pb-20 px-6">
        <div className="mx-auto max-w-7xl w-full flex flex-col gap-10 items-center">
          <h1 className="text-center text-slate-800 dark:text-white text-4xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-bold max-w-2xl">
            Terms of service
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-300 leading-[1.8rem] max-w-sm flex flex-row gap-2 items-center">
            Last Updated: December 10, 2024
          </p>
          <p
            className="pt-3 text-lg leading-relaxed whitespace-pre-wrap text-slate-500 dark:text-slate-300"
          >
            {`Welcome to Webhook Forms! By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.

1. Services Provided - Webhook Forms provides a JavaScript form builder to assist entrepreneurs in collecting feedback for their products. Our services include access to downloadable code packages upon purchase.

2. Ownership of Code - Upon purchasing a package, users receive ownership of the downloaded code for personal or business use. However, users are strictly prohibited from reselling, redistributing, or sublicensing the code in any form.

3. Refund Policy - We offer a 7-day satisfaction guarantee. If you are unsatisfied with your purchase, you may request a full refund within 7 days from the purchase date by contacting us at lewis@webhookforms.com.

4. Data Collection and Usage - We collect and use the following types of data.

Personal Data - Name, email address, payment information, and webhooks.

Non Personal Data - Cookies and other anonymous usage data for website functionality and analytics. For detailed information on how we handle your data, please refer to our Privacy Policy.

5. User Responsibilities - By using our services, you agree to use the code and services responsibly and in compliance with applicable laws. Protect any downloaded code from unauthorized access or misuse. Not engage in any activities that could harm the reputation or functionality of Webhook Forms.

6. Governing Law - These terms are governed by the laws of the United Kingdom, and any disputes arising from these terms shall be resolved under UK jurisdiction.

7. Limitation of Liability - Webhook Forms is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services, including but not limited to data loss or unauthorized access.

8. Updates to Terms - We reserve the right to update these Terms & Services at any time. In the event of significant changes, we will notify users via email. It is your responsibility to review these terms regularly to stay informed of any updates.

9. Termination of Use - We reserve the right to terminate or suspend access to our services for violations of these terms or for any behavior we deem harmful to our business or other users.

10. Contact Information - For questions, support, or disputes, please contact us at lewis@webhookforms.com

Thank you for choosing Webhook Forms. We’re excited to help you gather valuable feedback and grow your business!`}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
