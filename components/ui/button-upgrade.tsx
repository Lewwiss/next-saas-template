"use client";

import { Button } from "./button";
import { useState } from "react";
import apiClient from "@/lib/api";
import { RocketLaunchIcon } from "@heroicons/react/20/solid";

interface Props {
  className?: string;
  period?: "monthly" | "yearly";
}

const ButtonUpgrade = ({ className, period = "monthly" }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const { data } = await apiClient.post("/stripe/create-checkout", {
        priceId:
          period === "monthly"
            ? process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID
            : process.env.NEXT_PUBLIC_STRIPE_YEARLY_PRICE_ID,
        successUrl: `${window.location.origin}/dashboard`,
        cancelUrl: window.location.href,
        mode: "subscription",
      });

      window.location.href = data.url;
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  return (
    <Button
      className={className}
      variant="default"
      onClick={() => handleClick()}
      disabled={loading}
    >
      Upgrade To Pro
      <RocketLaunchIcon className="size-4" />
    </Button>
  );
};

export default ButtonUpgrade;
