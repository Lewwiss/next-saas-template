"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import Menu from "./Menu";

const navigation = () => {
  const [top, setTop] = useState(true);
  const [scrolledUp, setScrolledUp] = useState(false);
  const scrollYRef = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrolledUp(currentScrollY < scrollYRef.current);
    setTop(currentScrollY === 0);
    scrollYRef.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-10 fixed top-0 left-0 p-4 w-full duration-200 border-b ${
        !scrolledUp && !top ? "" : ""
      } ${
        top
          ? "bg-transparent border-transparent"
          : "bg-background/90 border-input"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3"
      >
        <div className="col-span-2 flex flex-row items-center gap-6">
          <Link href="/" className="flex flex-row items-center gap-2">
            <Logo className="size-5" />
            <h2 className="text-lg font-bold leading-relaxed">template</h2>
          </Link>
          <div className="ml-auto flex flex-row items-center gap-3 lg:hidden">
            <Menu />
          </div>
          <ul className="hidden lg:flex flex-row gap-6 items-center text-sm">
            {
              ["Components", "Docs"].map((item, index) => (
                <li key={index}>
                  <Link href={item} className="transition-colors hover:text-foreground/80 text-foreground/80">
                    {item}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-end gap-3">
          <Link href="/auth/signin">
            <Button>
              Get Started Now
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default navigation;
