"use client";

import { Button } from "./button";
import { useState } from "react";
import apiClient from "@/lib/api";
import { toast } from "sonner";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface Props {
  className?: string;
}

const ButtonCancel = ({ className }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const { data } = await apiClient.post(
        "/stripe/create-portal",
        {
          returnUrl: window.location.href,
        }
      );

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
      variant="outline"
      onClick={() => handleClick()}
      disabled={loading}
    >
      <XMarkIcon className="size-4" />
      Cancel Plan
    </Button>
  );
};

export default ButtonCancel;
