"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect } from "react";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const darkMode = localStorage.getItem("dark");
    if (darkMode === "true") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
};

export default ClientLayout;
