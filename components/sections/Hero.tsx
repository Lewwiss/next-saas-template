"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../ui/logo";

const Hero = () => {
  return (
    <section className="py-24 px-10">
      <div className="w-full mx-auto max-w-6xl flex flex-col items-center justify-center text-center gap-6">
        <Logo className="size-10" />
        <h1 className="text-5xl leading-tight sm:text-6xl sm:leading-tight lg:text-7xl lg:leading-tight font-bold mx-auto max-w-3xl">
          This is the simplest SAAS template.
        </h1>
        <p className="text-lg leading-relaxed max-w-md">
          Created with Next.js, ShadCN and Stripe.
        </p>
        <div className="mt-3 flex flex-row flex-wrap items-center justify-center gap-3">
          <Link href="/auth/signin">
            <Button size="lg" className="text-base">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
