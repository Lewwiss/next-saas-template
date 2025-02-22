import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import Verify from "@/components/sections/Verify";
import type { Metadata } from "next";

export const metadata: Metadata = {};

const Page = () => {
  return (
    <div>
      <Navigation />
      <Verify />
      <Footer />
    </div>
  );
};

export default Page;
