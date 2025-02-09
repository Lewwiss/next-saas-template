import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import type { Metadata } from "next";
import { DocumentIcon } from "@heroicons/react/20/solid";
import { CalendarClockIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Webhook Forms - Privacy Policy",
  description:
    "The quickest way to collect your user feedback, sending responses to your favourite apps.",
};

const Page = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      <Navigation />
      <div className="pt-40 sm:pt-44 pb-20 px-6">
        <div className="mx-auto max-w-7xl w-full flex flex-col gap-10 items-center">
          <p className="hidden border-input border py-0.5 px-2 text-[0.8rem] rounded-full leading-relaxed font-semibold max-w-sm flex flex-row items-center justify-center gap-1.5 text-center">
            <DocumentIcon className="size-3" />
            <span>Legal</span>
          </p>
          <h1 className="text-slate-800 dark:text-white text-center text-4xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-bold max-w-2xl">
            Privacy policy
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-300 leading-[1.8rem] max-w-sm flex flex-row gap-2 items-center">
            Last Updated: December 10, 2024
          </p>
          <p
            className="pt-3 text-lg leading-relaxed whitespace-pre-wrap text-slate-500 dark:text-slate-300"
          >
            {`Welcome to Webhook Forms! Your privacy is important to us. This Privacy Policy explains the types of information we collect, how it is used, and your rights regarding your data when you use our website and services.

1. Personal Data - (Information We Collect) We collect the following personal information when you use our services name, email, payment information and webhooks. This data is essential for providing our services and processing your orders.

Non Personal Data - We also collect non-personal information through cookies to improve website functionality and enhance user experience. Cookies help us understand user behavior and preferences but do not contain any personally identifiable information.

2. Purpose of Data Collection - Processing orders and providing services. Communicating with you regarding updates or inquiries related to your use of our services.

3. Data Sharing - Your privacy is our priority. We do not share, sell, or disclose your personal data to any third parties, except as required by law.

4. Children's Privacy - Webhook Forms does not knowingly collect data from children under the age of 13. If we become aware that we have inadvertently collected information from a child, we will take immediate steps to delete it.

5. Use of Cookies - We use cookies to enhance your browsing experience. Analyze website usage to improve our services. You can manage your cookie preferences through your browser settings.

6. Data Security - We implement appropriate technical and organizational measures to safeguard your personal information from unauthorized access, disclosure, or loss. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.

7. Updates to This Privacy Policy - We reserve the right to update or modify this Privacy Policy as needed. Any changes will be communicated to you via email. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data.

8. Your Rights - As a user, you have the right to access the personal information we hold about you. Request corrections to your information. Request deletion of your data, subject to applicable laws.

9. Contact Us - If you have any questions, concerns, or requests related to this Privacy Policy, please contact us at lewis@webhookforms.com

Thank you for trusting Webhook Forms. We are committed to protecting your privacy and ensuring your data is handled responsibly.`}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
