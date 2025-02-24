"use client";

import apiClient from "@/lib/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const Account = () => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);

    await apiClient
      .get(`/user`)
      .then((data) => {
        setUser(data.data);
      })
      .catch((e) => {
        console.error(e);
        toast.error("Failed to fetch user");
      });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="py-10 px-10">
      <div className="mx-auto max-w-6xl w-full flex flex-col gap-10">
        <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight font-bold max-w-4xl">
          Account
        </h1>

        <div className="flex flex-col gap-10 max-w-lg">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            {loading ? (
              <Skeleton className="size-10 rounded-full" />
            ) : (
              <img src={`${user?.image}`} className="size-10 rounded-full" />
            )}
            <div className="flex flex-col gap-1">
              {loading ? (
                <Skeleton className="w-28 h-[20px] mb-1" />
              ) : (
                <h2 className="font-bold">
                  {user?.name?.charAt(0)?.toUpperCase() + user?.name?.slice(1)}
                </h2>
              )}
              {loading ? (
                <Skeleton className="w-56 h-[16px] mt-1" />
              ) : (
                <p className="text-sm text-foreground/50">{user?.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label>Account ID</Label>
            <Input placeholder={loading ? "..." : user?.id} disabled />
          </div>

          <div className="w-full flex flex-col gap-3">
            <Label>Plan</Label>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder={
                  loading ? "..." : user?.priceIds?.length || "Basic"
                }
                disabled
              />
              <Link href="/pricing">
                <Button className="w-full sm:w-auto">
                  View Pricing
                  <ArrowUpRightIcon className="size-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label>Tokens</Label>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder={loading ? "..." : user?.tokens || 0}
                disabled
              />
              <Link href="/pricing">
                <Button className="w-full sm:w-auto">
                  View Pricing
                  <ArrowUpRightIcon className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
