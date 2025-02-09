"use client";

import {
  BoltIcon,
  CheckIcon,
  FireIcon,
  RocketLaunchIcon,
  StarIcon,
  TagIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import ButtonSignInGoogle from "../ui/button-sign-in-google";
import { useState } from "react";
import ButtonCheckout from "../ui/button-checkout";

const Pricing = () => {
  return (
    <section className="pt-40 sm:pt-48 pb-20 px-10 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center gap-6">
        {/* Tag */}
        <span className="text-white py-1 pl-2 pr-3 rounded-xl bg-neutral-600 text-sm font-bold flex flex-row gap-2 items-center">
          <TagIcon className="size-4 inline" />
          40% Limited Time Discount
        </span>
        <h1 className="text-slate-800 dark:text-white text-4xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-bold mx-auto max-w-2xl text-center">
          Pricing made simple
        </h1>
        <p className="text-lg font-medium text-slate-500 dark:text-slate-300 leading-relaxed mx-auto max-w-lg text-center">
          Find the most suitable plan for you.
        </p>
        {/* Plans */}
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-10">
          {/* Spacer */}
          <div className="hidden xl:flex lg:col-span-3 xl:col-span-1 flex flex-col justify-center xl:justify-end items-center xl:items-end gap-6">
            {/* <img src="/spline.svg" draggable={false} className="w-32 rotate-[22deg] mr-10 block dark:hidden" />
            <img src="/spline-dark.svg" draggable={false} className="w-32 rotate-[22deg] mr-10 hidden dark:block" /> */}
          </div>
          {/* Free Plan */}
          <div>
            <div className="relative p-6 rounded-3xl border-slate-200 dark:border-slate-900 border flex flex-col items-center gap-3.5 text-center">
              <h3 className="w-full text-slate-800 dark:text-white text-sm font-semibold leading-none">
                Starter
              </h3>
              <h3 className="py-2 w-full text-slate-800 dark:text-white text-2xl font-bold leading-none">
                Free
              </h3>
              <ButtonSignInGoogle className="w-full" />
              <p className="xl:hidden text-sm w-full font-medium leading-relaxed text-slate-500 dark:text-slate-300">
                Try out our free plan.
              </p>
              <ul className="w-full grid xl:hidden flex flex-col gap-3 pt-2 text-slate-800 dark:text-white">
                <li className="text-sm items-center font-medium flex flex-row gap-2">
                  <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                  Secured Webhooks
                </li>
                <li className="text-sm items-center font-medium flex flex-row gap-2">
                  <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                  Support
                </li>
                <li className="text-sm items-center font-medium flex flex-row gap-2">
                  <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />1
                  Form
                </li>
                <li className="text-sm items-center font-medium flex flex-row gap-2">
                  <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                  Discord
                </li>
                <li className="text-sm items-center font-medium flex flex-row gap-2">
                  <XMarkIcon className="my-0.5 size-5 text-rose-600" />
                  Custom Appearance
                </li>
              </ul>
            </div>
            <p className="hidden xl:block text-center pt-4 text-sm w-full font-medium leading-relaxed text-slate-500 dark:text-slate-300">
              Try out our free plan.
            </p>
          </div>
          {/* Pro Plan */}
          <div>
          <div className="relative p-6 rounded-3xl bg-slate-100 dark:bg-slate-900 flex flex-col items-center gap-3.5 text-center">
            <h3 className="w-full text-slate-800 dark:text-white text-sm font-semibold leading-none">
              Subscription
            </h3>
            <h3 className="py-2 w-full text-slate-800 dark:text-white text-2xl font-bold leading-none flex flex-row items-center justify-center gap-2">
              <span className="line-through text-slate-500 dark:text-slate-300 text-sm font-medium">
                $15.00
              </span>
              <span>$9.00</span>
              <span className="text-slate-500 dark:text-slate-300 text-sm font-medium">
                /monthly
              </span>
            </h3>
            <ButtonCheckout className="w-full" period="monthly" />
            <p className="xl:hidden text-sm w-full font-medium leading-relaxed text-slate-500 dark:text-slate-300">
              Pay monthly, cancel anytime.
            </p>
            <ul className="w-full grid xl:hidden flex flex-col gap-3 pt-2 text-slate-800 dark:text-white">
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Secured Webhooks
              </li>
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Support
              </li>
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Unlimited Forms
              </li>
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Discord + More Soon
              </li>
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Custom Appearance
              </li>
            </ul>
          </div>
          <p className="hidden xl:block pt-4 text-center text-sm w-full font-medium leading-relaxed text-slate-500 dark:text-slate-300">
              Pay monthly, cancel anytime.
            </p>
          </div>
          {/* One Time Payment */}
          <div>
          <div className="relative p-6 rounded-3xl bg-slate-100 dark:bg-slate-900 flex flex-col items-center gap-3.5 text-center">
            <span className="absolute top-0 -translate-y-1/2 text-white py-0.5 px-1.5 rounded-lg bg-neutral-600 text-xs font-bold flex flex-row gap-1 items-center">
              <FireIcon className="size-3 inline" />
              Most Popular
            </span>
            <h3 className="w-full text-slate-800 dark:text-white text-sm font-semibold leading-none">
              One Time Payment
            </h3>
            <h3 className="py-2 w-full text-slate-800 dark:text-white text-2xl font-bold leading-none flex flex-row items-center justify-center gap-2">
              <span className="line-through text-slate-500 dark:text-slate-300 text-sm font-medium">
                $124.00
              </span>
              <span>$64.80</span>
              <span className="hidden text-slate-500 dark:text-slate-300 text-sm font-medium">
                /once
              </span>
            </h3>
            <ButtonCheckout className="w-full" period="payment" />
            <p className="xl:hidden text-sm w-full font-medium leading-relaxed text-slate-500 dark:text-slate-300">
              Pay once and use forever.
            </p>
            <ul className="w-full grid xl:hidden flex flex-col gap-3 pt-2 text-slate-800 dark:text-white">
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Secured Webhooks
              </li>
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Support
              </li>
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Unlimited Forms
              </li>
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Discord + More Soon
              </li>
              <li className="text-sm items-center font-medium flex flex-row gap-2">
                <CheckIcon className="my-0.5 size-5 text-emerald-600 inline" />
                Custom Appearance
              </li>
            </ul>
          </div>
          <p className="hidden xl:block pt-4 text-center text-sm w-full font-medium leading-relaxed text-slate-500 dark:text-slate-300">
              Pay once and use forever.
            </p>
          </div>
        </div>
        {/* Features */}
        <div className="hidden xl:grid mx-auto max-w-7xl w-full grid-cols-1 lg:grid-cols-4 pt-2">
          <ul className="flex flex-col text-slate-800 dark:text-white">
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5 font-semibold rounded-tl-2xl">
              Secured Webhooks
            </li>
            <li className="p-5 font-semibold">Support</li>
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5 font-semibold">
              Amount
            </li>
            <li className="p-5 font-semibold">Platforms</li>
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5 font-semibold rounded-bl-2xl">
              Custom Appearance
            </li>
          </ul>
          <ul className="flex flex-col text-slate-500 dark:text-slate-300 text-center">
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5">
              <CheckIcon className="my-0.5 mx-auto size-5 text-emerald-600" />
            </li>
            <li className="p-5">
              <CheckIcon className="my-0.5 mx-auto size-5 text-emerald-600" />
            </li>
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5">1 Form</li>
            <li className="p-5">Discord</li>
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5">
              <XMarkIcon className="my-0.5 mx-auto size-5 text-rose-600" />
            </li>
          </ul>
          <ul className="flex flex-col text-slate-500 dark:text-slate-300 text-center">
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5">
              <CheckIcon className="my-0.5 mx-auto size-5 text-emerald-600" />
            </li>
            <li className="p-5">
              <CheckIcon className="my-0.5 mx-auto size-5 text-emerald-600" />
            </li>
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5">
              Unlimited Forms
            </li>
            <li className="p-5">Discord + More Soon</li>
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5">
              <CheckIcon className="my-0.5 mx-auto size-5 text-emerald-600" />
            </li>
          </ul>
          <ul className="flex flex-col text-slate-500 dark:text-slate-300 text-center">
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5 rounded-tr-2xl">
              <CheckIcon className="my-0.5 mx-auto size-5 text-emerald-600" />
            </li>
            <li className="p-5">
              <CheckIcon className="my-0.5 mx-auto size-5 text-emerald-600" />
            </li>
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5">
              Unlimited Forms
            </li>
            <li className="p-5">Discord + More Soon</li>
            <li className="bg-slate-100 dark:bg-slate-900/30 p-5 rounded-br-2xl">
              <CheckIcon className="my-0.5 mx-auto size-5 text-emerald-600" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
