"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import Menu from "./Menu";

const links = [
  { href: "/components", text: "Components" },
  { href: "/docs", text: "Docs" },
  { href: "/pricing", text: "Pricing" },
];

const Navigation = () => {
  return (
    <div className="px-10">
      <nav
        className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 py-6"
      >
        <div className="col-span-1 flex flex-row items-center gap-6">
          <Link href="/" className="flex flex-row items-center gap-2">
            <Logo className="size-4" />
            <h2 className="text-lg font-bold leading-relaxed">Template</h2>
          </Link>
          <div className="ml-auto flex flex-row items-center gap-3 md:hidden">
            <Menu />
          </div>
        </div>
        <ul className="col-span-2 hidden md:flex flex-row gap-6 items-center justify-end">
          {
            links.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-sm transition-colors hover:text-foreground/80 text-foreground">
                  {item.text}
                </Link>
              </li>
            ))
          }
          <Link href="/auth/signin">
            <Button>
              Get Started Now
            </Button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
