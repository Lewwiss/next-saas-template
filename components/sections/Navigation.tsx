"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import Menu from "./Menu";
import ButtonSignOut from "../ui/button-sign-out";
import ButtonAccount from "../ui/button-account";
import ButtonDarkMode from "../ui/button-dark-mode";

const links = [
  { href: "/components", text: "Components" },
  { href: "/docs", text: "Docs" },
  { href: "/pricing", text: "Pricing" },
];

const Navigation = ({ variant }: { variant?: 'dashboard' }) => {
  if (variant === 'dashboard') {
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
              <Menu variant="dashboard" />
            </div>
          </div>
          <ul className="col-span-2 hidden md:flex flex-row gap-3 items-center justify-end">
            <li>
              <ButtonDarkMode />
            </li>
            <li>
              <ButtonAccount />
            </li>
            <li>
              <ButtonSignOut />
            </li>
          </ul>
        </nav>
      </div>
    );
  }

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
          <li className="flex flex-row gap-3">
            <ButtonDarkMode />
            <Link href="/auth/signin">
              <Button>
                Get Started Now
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
