import Navigation from "@/components/sections/Navigation";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supaproof - Get AI to proofread your website.',
  description: 'Get AI to proofread your website, discovering content issues before your users.',
};

const Page = () => {
  return (<div>
    <Navigation />
    {/* <Hero />
    <Preview /> */}
    {/* <Steps /> */}
    {/* <Showcase /> */}
    {/* <Features /> */}
    {/* <FAQ />
    <CTA /> */}
    {/* <Footer /> */}
    <div className="bg-red-100 h-[200vh]" />
  </div>);
}

export default Page;
