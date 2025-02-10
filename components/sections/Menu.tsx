"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Bars3Icon,
  HomeIcon,
  RocketLaunchIcon,
  TagIcon,
} from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import ButtonSignOut from "../ui/button-sign-out";
import ButtonSignInGoogle from "../ui/button-sign-in-google";
import Link from "next/link";
import Logo from "../ui/logo";

const Menu = () => {
  const { status } = useSession();

  return (
    <nav className="lg:hidden ml-auto">
      <Sheet>
        <SheetTrigger asChild>
          <Bars3Icon className="size-5" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/"
                className="flex flex-row items-center justify-center gap-2"
              >
                <Logo className="size-5" />
                <h2 className="text-lg font-bold leading-relaxed">template</h2>
              </Link>
            </SheetTitle>
            <SheetDescription className="hidden">
              The quickest way to collect your user feedback, sending responses
              to your favourite apps.
            </SheetDescription>
            <ul className="py-3 flex flex-col items-center gap-3">
              {["Components", "Docs"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item}
                    className="transition-colors hover:text-foreground/80 text-foreground/80"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/auth/signin">
              <Button className="w-full">Get Started Now</Button>
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Menu;
