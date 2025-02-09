"use client";

import { useState } from "react";
import { Button, ButtonProps } from "./button";
import { signIn } from "next-auth/react";

const ButtonSignInDiscord = (props: ButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await signIn("discord", { callbackUrl: "/dashboard" });
    setLoading(false);
  };

  return (
    <Button
      {...props}
      className="bg-[#5865F2] hover:bg-[#6974f3] text-white"
      variant="default"
      onClick={() => handleClick()}
      loading={loading}
    >
      <svg
        width="33"
        height="24"
        viewBox="0 0 33 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[18px]"
      >
        <path
          d="M27.4544 2.03311C31.0279 7.259 32.7928 13.1537 32.133 19.9398C32.1303 19.9685 32.1152 19.9949 32.0915 20.0122C29.3853 21.9886 26.7634 23.1881 24.1783 23.9835C24.1582 23.9896 24.1366 23.9893 24.1167 23.9826C24.0968 23.9759 24.0794 23.9631 24.0671 23.9462C23.4699 23.1196 22.9273 22.2482 22.4518 21.3332C22.4245 21.2793 22.4495 21.2144 22.5056 21.1932C23.3675 20.8702 24.187 20.4831 24.9753 20.0248C25.0374 19.9886 25.0413 19.9001 24.984 19.8576C24.8167 19.734 24.6509 19.6042 24.4923 19.4744C24.4627 19.4504 24.4227 19.4457 24.3891 19.4618C19.2714 21.8124 13.6653 21.8124 8.48714 19.4618C8.45352 19.4469 8.41357 19.452 8.3847 19.4756C8.22649 19.6054 8.06037 19.734 7.89465 19.8576C7.8373 19.9001 7.84204 19.9886 7.90453 20.0248C8.69281 20.4744 9.51233 20.8702 10.373 21.1947C10.4288 21.216 10.4553 21.2793 10.4276 21.3332C9.96243 22.2494 9.41978 23.1208 8.81147 23.9473C8.78497 23.9808 8.74146 23.9961 8.70032 23.9835C6.12745 23.1881 3.50554 21.9886 0.799376 20.0122C0.776831 19.9949 0.760615 19.9673 0.758242 19.9386C0.206884 14.0687 1.33056 8.12527 5.43252 2.03193C5.44241 2.0158 5.45744 2.00321 5.47484 1.99574C7.49319 1.0744 9.65551 0.396574 11.9155 0.00947088C11.9567 0.00317651 11.9978 0.0220596 12.0191 0.0582522C12.2984 0.549999 12.6176 1.18062 12.8335 1.69597C15.2158 1.33404 17.6352 1.33404 20.0672 1.69597C20.2832 1.19163 20.5913 0.549999 20.8694 0.0582522C20.8793 0.0402974 20.8946 0.0259131 20.9132 0.0171527C20.9318 0.00839226 20.9527 0.00570372 20.973 0.00947088C23.2342 0.397754 25.3965 1.07558 27.4133 1.99574C27.4311 2.00321 27.4457 2.0158 27.4544 2.03311ZM14.0446 13.1938C14.0695 11.4585 12.7975 10.0226 11.2008 10.0226C9.61714 10.0226 8.35741 11.4459 8.35741 13.1938C8.35741 14.9413 9.64206 16.3646 11.2008 16.3646C12.7849 16.3646 14.0446 14.9413 14.0446 13.1938ZM24.5584 13.1938C24.5833 11.4585 23.3113 10.0226 21.715 10.0226C20.1309 10.0226 18.8712 11.4459 18.8712 13.1938C18.8712 14.9413 20.1558 16.3646 21.715 16.3646C23.3113 16.3646 24.5584 14.9413 24.5584 13.1938Z"
          fill="currentColor"
        />
      </svg>
      Join With Discord
    </Button>
  );
};

export default ButtonSignInDiscord;
