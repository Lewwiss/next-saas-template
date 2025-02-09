import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import Verify from "@/components/sections/Verify";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webhook Forms - Sign In',
  description: 'The quickest way to collect your user feedback, sending responses to your favourite apps.',
};

const Page = () => {
  return (<div>
    <Navigation />
    <Verify />
    <Footer />
  </div>);
}

export default Page;
