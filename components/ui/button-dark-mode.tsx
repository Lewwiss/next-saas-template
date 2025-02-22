"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";

interface Props {
  className?: string;
}

const ButtonDarkMode = ({ className }: Props) => {
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    localStorage.setItem("dark", dark ? "true" : "false");
  };

  return (
    <Button
      className={`${className} shrink-0`}
      onClick={() => toggleDarkMode()}
      variant="outline"
      size="icon"
    >
      <MoonIcon className="size-5 block dark:hidden" />
      <SunIcon className="size-5 hidden dark:block" />
    </Button>
  );
};

export default ButtonDarkMode;
