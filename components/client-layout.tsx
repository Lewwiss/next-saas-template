"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const ClientLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <SessionProvider>
                { children }
            </SessionProvider>
        </div>
    )
};

export default ClientLayout;
