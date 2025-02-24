"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/logo";
import ButtonSignOut from "../ui/button-sign-out";
import ButtonDarkMode from "../ui/button-dark-mode";
import { UserIcon } from "@heroicons/react/20/solid";

const links = [
  { href: "/components", text: "Components" },
  { href: "/docs", text: "Docs" },
  { href: "/pricing", text: "Pricing" },
];

const Menu = ({ variant }: { variant?: "dashboard" }) => {
  if (variant === "dashboard") {
    return (
      <nav>
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon className="size-4 opacity-70 hover:opacity-100 duration-200 cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link
                  href="/"
                  className="flex flex-row items-center justify-center gap-2"
                >
                  <Logo className="size-4" />
                  <h2 className="text-lg font-bold leading-relaxed">
                    Template
                  </h2>
                </Link>
              </SheetTitle>
              <div className="pt-3 flex flex-col gap-3">
                <Link href="/dashboard/account">
                  <Button variant="outline" className="w-full">
                    <UserIcon className="size-4" />
                    Account
                  </Button>
                </Link>
                <ButtonSignOut />
                <ButtonDarkMode className="w-full" />
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    );
  }

  return (
    <nav>
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className="size-4 opacity-70 hover:opacity-100 duration-200 cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/"
                className="flex flex-row items-center justify-center gap-2"
              >
                <Logo className="size-4" />
                <h2 className="text-lg font-bold leading-relaxed">Template</h2>
              </Link>
            </SheetTitle>
            <ul className="flex flex-col items-center gap-3 py-3">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-foreground/80 text-foreground"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <Link href="/auth/signin">
                <Button className="w-full">Get Started Now</Button>
              </Link>
              <ButtonDarkMode className="w-full" />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Menu;
