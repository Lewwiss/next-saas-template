"use client";

import { Button } from "./button";
import { useState } from "react";
import apiClient from "@/lib/api";
import { BoltIcon, RocketLaunchIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";

interface Props {
    className?: string;
    period?: 'monthly' | 'payment';
}

const ButtonCheckout = ({ className, period = "monthly" }: Props) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);

        try {
            const { data } = await apiClient.post(
                "/stripe/create-checkout",
                {
                    priceId: period === 'monthly' ? process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID : process.env.NEXT_PUBLIC_STRIPE_ONE_TIME_PRICE_ID,
                    successUrl: `${window.location.origin}/dashboard`,
                    cancelUrl: window.location.href,
                    mode: period === 'monthly' ? 'subscription' : 'payment',
                }
            );

            window.location.href = data.url;
        } catch (e) {
            console.error(e);
        }

        setLoading(false);
    };

    return (
        <Button className={className} variant="default" onClick={() => handleClick()} disabled={loading} loading={loading}>
            <RocketLaunchIcon className="size-5" />
            Get Started
        </Button>
    )
}

export default ButtonCheckout;
