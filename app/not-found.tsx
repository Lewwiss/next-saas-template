import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import type { Metadata } from 'next';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {};

const Page = () => {
  return (<div>
    <Navigation />
    <section className="py-48 px-10 flex items-center justify-center">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-6">
            <h1 className="text-3xl leading-tight font-bold max-w-sm text-center">
                404 - Page Not Found
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
