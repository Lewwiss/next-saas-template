"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Menu from "./Menu";
import ButtonSignOut from "../ui/button-sign-out";
import ButtonAccount from "./ButtonAccount";
import { HomeIcon, RocketLaunchIcon, UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Logo from "../ui/logo";
import ButtonDarkMode from "../ui/button-dark-mode";
import apiClient from "@/lib/api";
import { toast } from "sonner";

const Navigation = () => {
  const [top, setTop] = useState(true);
  const [scrolledUp, setScrolledUp] = useState(false);
  const scrollYRef = useRef(0);
  const [showDashboardButton, setShowDashboardButton] = useState(false);
  const [user, setUser] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  const getUser = async () => {
    try {
      const { data } = await apiClient.get(`/user`);
      setUser(data.data);
    } catch (e) {
      console.error(e);
      toast.error("Failed to get user");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolledUp(currentScrollY < scrollYRef.current);
      setTop(currentScrollY === 0);
      scrollYRef.current = currentScrollY;
    };

    setShowDashboardButton(window.location.pathname !== "/dashboard");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("dark", document.documentElement.classList.contains("dark") ? "true" : "false");
  };

  return (
    <div
      className={`z-10 fixed top-0 left-0 w-full duration-200 ${
        !scrolledUp && !top ? "sm:-translate-y-9" : ""
      }`}
    >
      <div
        className={`hidden h-9 sm:flex flex-row gap-2 flex-wrap items-center justify-center bg-neutral-600 text-white text-sm font-semibold text-center py-2 px-6 duration-200`}
      >
        <span className="bg-white py-0.5 px-1.5 rounded-lg text-neutral-600 text-xs font-bold flex flex-row gap-1 items-center">
          <RocketLaunchIcon className="size-3 inline" />
          New Update
        </span>
        Now available for Discord! Other integrations coming soon...
      </div>
      <nav
        className={`min-h-[89px] grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 duration-200 border-b ${
          top
            ? "bg-transparent border-transparent"
            : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-900"
        }`}
      >
        <div className="flex flex-row items-center gap-6">
          <Link href="/" className="flex flex-row items-center gap-3">
            <Logo className="size-5" />
            <h2 className="font-title text-xl font-bold leading-relaxed text-slate-800 dark:text-white pt-1">Webhook Forms</h2>
            {
              user && user?.pro ?
              <span className="text-white py-0.5 px-1.5 rounded-lg bg-neutral-600 text-xs font-bold flex flex-row gap-1 items-center">
              <UserIcon className="size-3 inline" />
              Pro
            </span>
            :
            <span className="text-slate-500 dark:text-slate-300 py-0.5 px-1.5 rounded-lg bg-slate-200 dark:bg-slate-900 text-xs font-bold flex flex-row gap-1 items-center">
              <UserIcon className="size-3 inline" />
              Free
            </span>
            }
          </Link>
          <div className="ml-auto flex flex-row items-center gap-3 lg:hidden">
            <Menu />
          </div>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-end gap-3">
          {
            showDashboardButton ?
            <Link href="/dashboard">
                <Button variant="outline">
                    <HomeIcon className="size-4" />
                    Back To Dashboard
                </Button>
            </Link> : null
          }
          <ButtonAccount />
          <ButtonSignOut />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
