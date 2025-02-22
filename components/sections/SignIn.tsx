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
    <div className="py-40 px-10 flex flex-col gap-6">
      <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight font-bold text-center">
          Sign in
      </h1>
      <div className="w-full mx-auto max-w-sm grid gap-6">
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Button type="submit" className="w-full" disabled={buttonDisabled()} onClick={handleSubmit} loading={loading}>
          Continue With Email
        </Button>
        <div className="flex flex-row gap-4 items-center py-1">
          <hr className="w-full border-input" />
          <span className="text-foreground/80">or</span>
          <hr className="w-full border-input" />
        </div>
        <div className="flex flex-col gap-4">
          <ButtonSignInGoogle className="w-full" />
          <ButtonSignInDiscord className="w-full" />
        </div>
        <span className="text-foreground text-center text-sm">
          Need help? Join our support server
        </span>
      </div>
    </div>
  );
};

export default SignIn;
