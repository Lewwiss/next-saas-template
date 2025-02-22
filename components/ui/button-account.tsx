"use client";

import { Button, type ButtonProps } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRightIcon, UserIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import ButtonBillingArea from "../ui/button-billing-area";
import apiClient from "@/lib/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

const ButtonAccount = (props: ButtonProps) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  const getUser = async () => {
    try {
      const { data } = await apiClient.get(`/user`);
      setUser(data.data);
    } catch (e) {
      console.error(e);
      toast.error("Failed to get user");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...props} variant="outline">
          <UserIcon className="size-4" />
          Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Account</DialogTitle>
          <DialogDescription className="hidden">Account</DialogDescription>
        </DialogHeader>
        <div className="pb-1 pt-3 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue={session?.user.name || ""} disabled />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              defaultValue={session?.user.email || ""}
              disabled
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="plan">Plan</Label>
            <Input
              id="plan"
              defaultValue={
                user && user.priceIds.length ? user.priceIds.join(", ") : "None"
              }
              disabled
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="plan">Tokens</Label>
            <Input
              id="tokens"
              defaultValue={user && user.tokens ? 0 : 0}
              disabled
            />
          </div>
          <hr className="border-slate-200 dark:border-slate-900" />
          <div className="flex flex-col gap-3">
            {user?.customerId ? <ButtonBillingArea /> : null}
            {!(user && user.priceIds.length) || !user.tokens ? (
              <Link href="/pricing" className="w-full">
                <Button className="w-full">
                  View Pricing
                  <ArrowUpRightIcon className="size-4" />
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAccount;
