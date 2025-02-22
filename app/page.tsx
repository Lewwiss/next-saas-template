import Compare from "@/components/sections/Compare";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navigation from "@/components/sections/Navigation";
import Steps from "@/components/sections/Steps";
import type { Metadata } from 'next';

export const metadata: Metadata = {};

const Page = () => {
  return (<div>
    <Navigation />
    <Hero />
    <Steps />
    <Compare />
    <Features />
    <CTA />
    <Footer />
  </div>);
}

export default Page;
