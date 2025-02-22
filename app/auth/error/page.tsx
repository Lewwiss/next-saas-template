import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import Error from "@/components/sections/Error";
import type { Metadata } from 'next'

export const metadata: Metadata = {};

const Page = () => {
  return (<div>
    <Navigation />
    <Error />
    <Footer />
  </div>);
}

export default Page;
