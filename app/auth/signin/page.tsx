import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import SignIn from "@/components/sections/SignIn";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webhook Forms - Sign In',
  description: 'The quickest way to collect your user feedback, sending responses to your favourite apps.',
};

const Page = () => {
  return (<div>
    <Navigation />
    <SignIn />
    <Footer />
  </div>);
}

export default Page;
