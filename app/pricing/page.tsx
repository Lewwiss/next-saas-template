import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Navigation from "@/components/sections/Navigation";
import Pricing from "@/components/sections/Pricing";
import type { Metadata } from 'next'
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {};

const Page = () => {
  return (<div>
    <Navigation />
    <Pricing />
    <FAQ />
    <CTA />
    <Footer />
  </div>);
}

export default Page;
