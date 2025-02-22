import { BoltIcon, StarIcon, UserIcon } from "@heroicons/react/20/solid";
import { Button } from "../ui/button";
import Link from "next/link";

const Steps = () => {
  return (
    <section className="py-20 px-10 flex flex-col gap-10" id="steps">
      <div className="mx-auto max-w-6xl w-full flex flex-col items-center gap-6">
        <h2 className="text-3xl leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold max-w-4xl mx-auto text-center">
          How does it work?
        </h2>
        <p className="text-lg leading-relaxed mx-auto max-w-lg text-center">
          Get started with our platform in 3 simple steps.
        </p>
      </div>
      <div className="w-full mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Step 1 */}
        <div className="border border-input flex flex-col gap-4 p-6 rounded-xl">
          <div className="flex flex-row items-center gap-4">
            <div className="shrink-0 size-8 rounded-full border border-input flex items-center justify-center">
              <UserIcon className="size-4" />
            </div>
            <h3 className="text-lg font-bold">1. Step title</h3>
          </div>
          <p className="leading-relaxed">
            This is a description of the step and what it does for the user.
          </p>
        </div>

        {/* Step 2 */}
        <div className="border border-input flex flex-col gap-4 p-6 rounded-xl">
          <div className="flex flex-row items-center gap-4">
            <div className="shrink-0 size-8 rounded-full border border-input flex items-center justify-center">
              <BoltIcon className="size-4" />
            </div>
            <h3 className="text-lg font-bold">2. Step title</h3>
          </div>
          <p className="leading-relaxed">
            This is a description of the step and what it does for the user.
          </p>
        </div>

        {/* Step 3 */}
        <div className="border border-input flex flex-col gap-4 p-6 rounded-xl">
          <div className="flex flex-row items-center gap-4">
            <div className="shrink-0 size-8 rounded-full border border-input flex items-center justify-center">
              <StarIcon className="size-4" />
            </div>
            <h3 className="text-lg font-bold">3. Step title</h3>
          </div>
          <p className="leading-relaxed">
            This is a description of the step and what it does for the user.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl flex flex-row flex-wrap items-center justify-center gap-3">
        <Link href="/auth/signin">
          <Button size="lg" className="text-base">
            Get Started For Free
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Steps;
