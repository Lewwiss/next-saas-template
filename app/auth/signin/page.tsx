import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import SignIn from "@/components/sections/SignIn";
import type { Metadata } from 'next'

export const metadata: Metadata = {};

const Page = () => {
  return (<div>
    <Navigation />
    <SignIn />
    <Footer />
  </div>);
}

export default Page;
