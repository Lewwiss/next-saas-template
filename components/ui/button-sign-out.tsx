"use client";

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/20/solid";
import { Button, type ButtonProps } from "./button";
import { signOut } from "next-auth/react";

const ButtonSignOut = (props: ButtonProps) => {
  const handleClick = () => {
    signOut();
  };

  return (
    <Button {...props} variant="destructive" onClick={() => handleClick()}>
      Sign Out
      <ArrowRightStartOnRectangleIcon className="size-4" />
    </Button>
  );
};

export default ButtonSignOut;
