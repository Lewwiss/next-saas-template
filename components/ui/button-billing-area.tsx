"use client";

import { Button } from "./button";
import { useState } from "react";
import apiClient from "@/lib/api";
import { toast } from "sonner";
import { CreditCardIcon } from "@heroicons/react/20/solid";

interface Props {
  className?: string;
}

const ButtonBillingArea = ({ className }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const { data } = await apiClient.post("/stripe/create-portal", {
        returnUrl: window.location.href,
      });

      window.location.href = data.url;
    } catch (e) {
      console.error(e);
      toast.error("An error occurred.");
    }

    setLoading(false);
  };

  return (
    <Button
      className={className}
      variant="default"
      onClick={() => handleClick()}
      disabled={loading}
      loading={loading}
    >
      <CreditCardIcon className="size-4" />
      Open Billing Area
    </Button>
  );
};

export default ButtonBillingArea;
