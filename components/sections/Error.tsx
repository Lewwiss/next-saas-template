"use client";

import ButtonSignInGoogle from "../ui/button-sign-in-google";
import ButtonSignInDiscord from "../ui/button-sign-in-discord";

const Error = () => {
  return (
    <div className="pt-40 sm:pt-52 pb-20 sm:pb-32 px-10 flex flex-col gap-6">
      <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight font-bold text-center">
      Error occured!
      </h1>
      <div className="w-full mx-auto max-w-sm grid gap-6">
        <div className="text-center text-foreground flex flex-row flex-wrap gap-1.5 items-center justify-center">
        An error has occurred trying to sign in.
        </div>
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

export default Error;
