"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonSignInGoogle from "../ui/button-sign-in-google";
import ButtonSignInDiscord from "../ui/button-sign-in-discord";
import { useState } from "react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const buttonDisabled = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) return true;
    return !email;
  }

  const handleSubmit = async () => {
    if (buttonDisabled()) return;
    setLoading(true);
    await signIn("email", { email });
    setLoading(false);
  };

  return (
    <div className="pt-40 sm:pt-52 pb-20 sm:pb-32 px-10 flex flex-col gap-5">
      <h1 className="text-slate-800 dark:text-white text-3xl leading-[2.6rem] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold text-center">
          Sign in
      </h1>
      <div className="w-full mx-auto max-w-md grid gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Button type="submit" className="w-full" disabled={buttonDisabled()} onClick={handleSubmit} loading={loading}>
          Continue With Email
        </Button>
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

export default SignIn;
