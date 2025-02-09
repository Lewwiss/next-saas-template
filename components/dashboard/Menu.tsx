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
import { Bars3Icon, HomeIcon } from "@heroicons/react/20/solid";
import ButtonSignOut from "../ui/button-sign-out";
import ButtonAccount from "./ButtonAccount";
import Link from "next/link";
import Logo from "../icons/Logo";
import { useEffect, useState } from "react";

const Menu = () => {
  const [showDashboardButton, setShowDashboardButton] = useState(false);

  useEffect(() => {
    setShowDashboardButton(window.location.pathname !== "/dashboard");
  }, []);

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
                <Link href="/" className="flex flex-row items-center justify-center gap-3">
                  <Logo className="size-4" />
                  <h2 className="font-title text-lg font-bold leading-relaxed text-slate-800 dark:text-white pt-1">Webhook Forms</h2>
                </Link>
              </SheetTitle>
              <SheetDescription className="hidden">
                The quickest way to collect your user feedback, sending responses to your favourite apps.
              </SheetDescription>
            </div>
            <ul className="py-6 flex flex-col gap-3">
              {
                showDashboardButton ?
                <li>
                  <Link href="/dashboard">
                      <Button variant="outline" className="w-full">
                          <HomeIcon className="size-4" />
                          Back To Dashboard
                      </Button>
                  </Link>
                </li>
                : null
              }
              <li>
                <ButtonAccount className="w-full" />
              </li>
              <li>
                <ButtonSignOut className="w-full" />
              </li>
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Menu;
