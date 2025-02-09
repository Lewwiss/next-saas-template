"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Menu from "./Menu";
import ButtonSignOut from "../ui/button-sign-out";
import { useSession } from "next-auth/react";
import ButtonSignInGoogle from "../ui/button-sign-in-google";
import { BoltIcon, ClockIcon, HomeIcon, RocketLaunchIcon, TagIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ButtonDarkMode from "../ui/button-dark-mode";

const navigation = () => {
  const [top, setTop] = useState(true);
  const [scrolledUp, setScrolledUp] = useState(false);
  const scrollYRef = useRef(0);
  const { status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolledUp(currentScrollY < scrollYRef.current);
      setTop(currentScrollY === 0);
      scrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-10 fixed top-0 left-0 p-6 w-full duration-200 border-b ${
        !scrolledUp && !top ? "" : ""
      } ${
        top
          ? "bg-transparent border-transparent"
          : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-900"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10 duration-200`}
      >
        <div className="col-span-2 flex flex-row items-center gap-6">
          <Link href="/" className="flex flex-row items-center gap-3">
            <h2 className="text-xl font-bold leading-relaxed text-slate-800 dark:text-white">Supaproof</h2>
          </Link>
          <div className="ml-auto flex flex-row items-center gap-3 lg:hidden">
            <ButtonDarkMode />
            <Menu />
          </div>
          <ul className="hidden lg:flex flex-row gap-3 items-center">
            <li>
              <Link href="/pricing">
                <Button variant="ghost" size="lg">
                  Pricing
                  <span className="hidden text-white py-0.5 px-1.5 rounded-lg bg-neutral-600 text-xs font-bold flex flex-row gap-1 items-center">
                    <TagIcon className="size-3 inline" />
                    40% Discount
                  </span>
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/#faq">
                <Button variant="ghost" size="lg">FAQ</Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-end gap-3">
          <ButtonDarkMode />
          {status === "authenticated" ? (
            <>
                <Link href="/dashboard">
                    <Button variant="outline">
                      <HomeIcon className="size-4" />
                      Go To Dashboard
                    </Button>
                </Link>
                <ButtonSignOut />
            </>
          ) : (
            <>
              <Link href="/auth/signin">
                <Button>
                  Get Started For Free
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default navigation;
