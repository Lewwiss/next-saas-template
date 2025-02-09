"use client";

import ButtonSignInGoogle from "../ui/button-sign-in-google";
import ButtonSignInDiscord from "../ui/button-sign-in-discord";
import { XCircleIcon } from "@heroicons/react/20/solid";

const CustomIcon = () => {
    return (
      <span className="relative flex items-center justify-center">
        <div className="size-3 rounded-full bg-white absolute" />
        <XCircleIcon className="relative size-5 text-rose-600 dark:text-rose-500" />
      </span>
    )
  };

const Error = () => {
    return (
        <div className="pt-40 sm:pt-52 pb-20 sm:pb-32 px-10 flex flex-col gap-5">
          <h1 className="text-slate-800 dark:text-white text-3xl leading-[2.6rem] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold text-center">
              Error occured!
          </h1>
          <div className="w-full mx-auto max-w-md grid gap-5">
            <div className="text-center text-slate-500 dark:text-slate-300 flex flex-row flex-wrap gap-1.5 items-center justify-center">
                {/* <CustomIcon /> */}
                An error has occurred trying to sign in.
            </div>
            <div className="flex flex-row gap-4 items-center py-1">
              <hr className="w-full border-slate-200 dark:border-slate-800" />
              <span className="text-slate-500 dark:text-slate-300">or</span>
              <hr className="w-full border-slate-200 dark:border-slate-800" />
            </div>
            <div className="flex flex-col gap-[18px]">
              <ButtonSignInGoogle className="w-full" />
              <ButtonSignInDiscord className="w-full" />
            </div>
            <span className="text-slate-500 dark:text-slate-300 text-center text-sm">
              Need help? Join our{' '}
              <a href="https://discord.gg/FZTVYjMTWq" target="_blank" className="hover:underline underline-offset-4">
                support server
              </a>
            </span>
          </div>
        </div>
      );
};

export default Error;
