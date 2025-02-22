import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {};

const Page = () => {
  return (
    <div>
      <Navigation />
      <div className="py-20 px-10">
        <div className="mx-auto max-w-6xl w-full flex flex-col gap-10 items-center">
          <h1 className="text-center text-4xl leading-tight sm:text-5xl sm:leading-tight font-bold max-w-2xl">
            Terms of service
          </h1>
          <p className="max-w-sm flex flex-row gap-2 items-center">
            Last Updated: December 10, 2024
          </p>
          <p
            className="text-foreground/50 leading-relaxed whitespace-pre-wrap"
          >
            {`Welcome to [NAME]. By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.

1. Services Provided - [NAME] provides a JavaScript form builder to assist entrepreneurs in collecting feedback for their products. Our services include access to downloadable code packages upon purchase.

2. Ownership of Code - Upon purchasing a package, users receive ownership of the downloaded code for personal or business use. However, users are strictly prohibited from reselling, redistributing, or sublicensing the code in any form.

3. Refund Policy - We offer a 7-day satisfaction guarantee. If you are unsatisfied with your purchase, you may request a full refund within 7 days from the purchase date by contacting us at lewis@webhookforms.com.

4. Data Collection and Usage - We collect and use the following types of data.

Personal Data - Name, email address, payment information, and webhooks.

Non Personal Data - Cookies and other anonymous usage data for website functionality and analytics. For detailed information on how we handle your data, please refer to our Privacy Policy.

5. User Responsibilities - By using our services, you agree to use the code and services responsibly and in compliance with applicable laws. Protect any downloaded code from unauthorized access or misuse. Not engage in any activities that could harm the reputation or functionality of [NAME].

6. Governing Law - These terms are governed by the laws of the United Kingdom, and any disputes arising from these terms shall be resolved under UK jurisdiction.

7. Limitation of Liability - [NAME] is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services, including but not limited to data loss or unauthorized access.

8. Updates to Terms - We reserve the right to update these Terms & Services at any time. In the event of significant changes, we will notify users via email. It is your responsibility to review these terms regularly to stay informed of any updates.

9. Termination of Use - We reserve the right to terminate or suspend access to our services for violations of these terms or for any behavior we deem harmful to our business or other users.

10. Contact Information - For questions, support, or disputes, please contact us at lewis@webhookforms.com

Thank you for choosing [NAME]. We’re excited to help you gather valuable feedback and grow your business!`}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
