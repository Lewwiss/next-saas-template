import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Navigation from "@/components/sections/Navigation";
import FAQ from "@/components/sections/FAQ";
import type { Metadata } from 'next';
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: 'Webhook Forms - Create and send forms with webhooks',
  description: 'The quickest way to collect your user feedback, sending responses to your favourite apps.',
};

const Page = () => {
  return (<div>
    <Navigation />
    <section className="pt-40 sm:pt-48 pb-20 px-10 bg-white dark:bg-slate-950 min-h-[calc(100vh-10rem)] flex items-center justify-center">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-6">
            <h1 className="text-slate-800 dark:text-white text-3xl leading-[2.6rem] font-bold max-w-sm text-center">
                We couldn&apos;t find the page you&apos;re looking for...
            </h1>
            <Link href="/">
                <Button variant="outline">
                    <ArrowLeftIcon className="size-5" />
                    Back To Home
                </Button>
            </Link>
        </div>
    </section>
    <Footer />
  </div>);
}

export default Page;
