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
            Last Updated: January 1, 2025
          </p>
          <p className="text-foreground/50 leading-relaxed whitespace-pre-wrap">
            {`[TERMS OF SERVICE HERE]`}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
