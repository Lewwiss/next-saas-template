"use client";

import {
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import { Button } from "../ui/button";
import ButtonSignInGoogle from "../ui/button-sign-in-google";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [word, setWord] = useState("website");
  const words = ["website", "blog", "knowledgebase", "articles", "landing page", "sales funnel"];

  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typing) {
      // Typing effect
      if (word.length < words[index].length) {
        timeout = setTimeout(() => {
          setWord((prev) => prev + words[index][prev.length]);
        }, 150);
      } else {
        setTimeout(() => setTyping(false), 1000); // Pause before deleting
      }
    } else {
      // Deleting effect
      if (word.length > 0) {
        timeout = setTimeout(() => {
          setWord((prev) => prev.slice(0, -1));
        }, 100);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length); // Move to next word
      }
    }

    return () => clearTimeout(timeout);
  }, [word, typing, index]);

  return (
    <section className="bg-white dark:bg-slate-950 relative pt-40 sm:pt-48 pb-28 px-10 overflow-hidden flex flex-col items-center justify-center">
      <div className="relative w-full mx-auto max-w-7xl flex flex-col items-start justify-center gap-6">
        <h1 className="text-slate-800 dark:text-white text-5xl leading-tight lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-[5.5rem] font-semibold max-w-4xl">
          Get ai to proofread <br className="hidden sm:block" /> your{" "}
          {word}
        </h1>
        <p className="font-medium text-lg text-slate-500 dark:text-slate-300 leading-relaxed max-w-md">
          The quickest way to collect form responses, sending them straight to
          your favourite apps.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-start gap-3 mt-3">
          <Link href="/auth/signin">
            <Button size="lg" className="text-base">
              Get Started For Free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
