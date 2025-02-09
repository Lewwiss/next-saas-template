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
import { Bars3Icon, HomeIcon, RocketLaunchIcon, TagIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import ButtonSignOut from "../ui/button-sign-out";
import ButtonSignInGoogle from "../ui/button-sign-in-google";
import Link from "next/link";

const Menu = () => {
  const { status } = useSession();

  return (
    <nav className="lg:hidden ml-auto">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Bars3Icon className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="flex flex-row items-center gap-2">
              <SheetTitle className="text-base font-bold leading-relaxed w-full">
                <Link href="/" className="w-full flex flex-row items-center justify-center gap-3">
                  <h2 className="font-title text-lg font-bold leading-relaxed text-slate-800 dark:text-white pt-1">Webhook Forms</h2>
                </Link>
              </SheetTitle>
              <SheetDescription className="hidden">
                The quickest way to collect your user feedback, sending responses to your favourite apps.
              </SheetDescription>
            </div>
            <ul className="py-6 flex flex-col gap-3">
              <li>
                <Link href="/pricing">
                  <Button variant="ghost" className="w-full">
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
                  <Button variant="ghost" className="w-full">FAQ</Button>
                </Link>
              </li>
              <li className="mb-6">
                <Link href="/guides">
                  <Button variant="ghost" className="w-full">
                    Guides
                    <span className="text-white py-0.5 px-1.5 rounded-lg bg-neutral-600 text-xs font-bold flex flex-row gap-1 items-center">
                      <TagIcon className="hidden size-3 inline" />
                      New
                    </span>
                  </Button>
                </Link>
              </li>
              {
                status === "authenticated" ?
                <>
                  <li>
                    <Link href="/dashboard">
                      <Button variant="outline" className="w-full">
                        <HomeIcon className="size-4" />
                        Go To Dashboard
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <ButtonSignOut className="w-full" />
                  </li>
                </> :
                <>
                  <li>
                    <ButtonSignInGoogle className="w-full" />
                  </li>
                  <li>
                    <Link href="/auth/signin">
                      <Button className="w-full">
                        <RocketLaunchIcon className="size-5" />
                        Get Started Now
                      </Button>
                    </Link>
                  </li>
                </>
              }
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Menu;
