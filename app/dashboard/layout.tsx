import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth";
import { Toaster } from "@/components/ui/sonner";

export default async function LayoutPrivate({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
}
