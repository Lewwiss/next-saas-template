import {
  ArrowRightIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronRightIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/20/solid";
import { Button } from "../ui/button";
import Link from "next/link";
import { FilterIcon } from "lucide-react";
import Discord from "../icons/Discord";

const Steps = () => {
  return (
    <section
      className="py-20 px-10 flex flex-col gap-12"
      id="features"
    >
      <div className="mx-auto max-w-7xl w-full flex flex-col items-center gap-6">
        <h1 className="text-aquamarine-950 text-3xl leading-[2.6rem] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-medium max-w-4xl mx-auto text-center">
          How does it work?
        </h1>
        {/* <p className="text-lg text-neutral-500 leading-relaxed mx-auto max-w-2xl text-center">
          Scan over multiple pages instantly, finding any content
          issues.
        </p> */}
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10 w-full text-center">
        <div className="flex flex-col items-center gap-5">
          <div className="shrink-0 size-10 bg-aquamarine-950 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">1</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-title text-2xl font-semibold text-aquamarine-950">
              Create your account
            </h3>
            <p className="text-lg text-neutral-500 leading-relaxed max-w-xs flex flex-grow">
              Sign up to our platform and get 10 free credits to get started.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="shrink-0 size-10 bg-neutral-100 rounded-xl flex items-center justify-center">
            <span className="text-neutral-400 font-bold">2</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-neutral-800">
              Add your URL's
            </h3>
            <p className="text-lg font-medium text-neutral-500 leading-relaxed max-w-sm flex flex-grow">
              Enter the URL's you'd like us to check, use our bulk tools to
              help!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="shrink-0 size-10 bg-neutral-100 rounded-xl flex items-center justify-center">
            <span className="text-neutral-400 font-bold">3</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-neutral-800">
              Check out the results
            </h3>
            <p className="text-lg font-medium text-neutral-500 leading-relaxed max-w-sm flex flex-grow">
              Our platform will scan your URL's and display any content issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section
      className="py-20 px-10 bg-neutral-50 flex flex-col gap-12"
      id="features"
    >
      <div className="mx-auto max-w-7xl w-full flex flex-col items-center gap-6">
        <h1 className="text-neutral-900 text-3xl leading-[2.6rem] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-medium max-w-4xl mx-auto text-center">
          How does it work?
        </h1>
        <p className="text-lg font-medium text-neutral-500 leading-relaxed mx-auto max-w-2xl text-center">
          Scan over multiple pages instantly, finding any content
          issues.
        </p>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10 w-full text-center">
        <div className="rounded-3xl flex flex-col items-center gap-5">
          <div className="shrink-0 size-10 bg-emerald-900 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">1</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-neutral-800">
              Create your account
            </h3>
            <p className="text-lg font-medium text-neutral-500 leading-relaxed max-w-sm flex flex-grow">
              Sign up to our platform and get 10 free credits to get started.
            </p>
          </div>
        </div>

        <div className="rounded-3xl flex flex-col items-center gap-5">
          <div className="shrink-0 size-10 bg-neutral-200 rounded-xl flex items-center justify-center">
            <span className="text-neutral-500 font-bold">2</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-neutral-800">
              Add your URL's
            </h3>
            <p className="text-lg font-medium text-neutral-500 leading-relaxed max-w-sm flex flex-grow">
              Enter the URL's you'd like us to check, use our bulk tools to
              help!
            </p>
          </div>
        </div>

        <div className="rounded-3xl flex flex-col items-center gap-5">
          <div className="shrink-0 size-10 bg-neutral-200 rounded-xl flex items-center justify-center">
            <span className="text-neutral-500 font-bold">3</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-neutral-800">
              Check out the results
            </h3>
            <p className="text-lg font-medium text-neutral-500 leading-relaxed max-w-sm flex flex-grow">
              Our platform will scan your URL's and display any content issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
