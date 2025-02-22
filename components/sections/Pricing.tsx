"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import ButtonCheckout from "../ui/button-checkout";

const plan1Features = ["Feature 1", "Feature 2", "Feature 3"];

const plan2Features = ["Feature 1", "Feature 2", "Feature 3"];

const Pricing = () => {
  return (
    <section className="py-20 px-10" id="pricing">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl leading-tight sm:text-5xl sm:leading-tight font-bold mx-auto max-w-2xl text-center">
          Pricing made simple
        </h1>
        <p className="text-lg leading-relaxed mx-auto max-w-lg text-center">
          Find the most suitable plan for you.
        </p>
        <div className="mx-auto max-w-3xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 pt-6">
          {/* Plan 1 */}
          <div className="border border-input p-6 rounded-xl flex flex-col gap-5">
            <h3 className="text-sm font-semibold leading-none">Plan 1</h3>
            <p className="text-4xl font-bold">$10.00</p>
            <span className="text-sm font-medium">This is a description</span>
            <ul className="w-full flex flex-col gap-3">
              {plan1Features.map((feature, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center gap-2 text-sm font-medium"
                >
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonCheckout className="w-full" period="monthly" />
          </div>

          {/* Plan 2 */}
          <div className="border border-input p-6 rounded-xl flex flex-col gap-5">
            <h3 className="text-sm font-semibold leading-none">Plan 2</h3>
            <p className="text-4xl font-bold">$20.00</p>
            <span className="text-sm font-medium">This is a description</span>
            <ul className="w-full flex flex-col gap-3">
              {plan2Features.map((feature, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center gap-2 text-sm font-medium"
                >
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonCheckout className="w-full" period="monthly" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
