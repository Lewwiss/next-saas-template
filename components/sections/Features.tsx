import {
  ArrowRightIcon,
  ChatBubbleLeftEllipsisIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/20/solid";
import { Button } from "../ui/button";
import Link from "next/link";
import { FilterIcon } from "lucide-react";
import Discord from "../icons/Discord";

const Features = () => {
  return (
    <section className="pt-28 pb-20 px-10 bg-white dark:bg-slate-950 flex flex-col gap-12" id="features">

      <div className="mx-auto max-w-7xl w-full flex flex-col items-center gap-6">
        <h1 className="text-slate-800 dark:text-white text-3xl leading-[2.6rem] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold max-w-4xl mx-auto text-center">
          A few of our features
        </h1>
        <p className="text-lg font-medium text-slate-500 dark:text-slate-300 leading-relaxed mx-auto max-w-lg text-center">
          Get started quicker with our easy to follow <Link href="/guides" className="hover:underline underline-offset-4">guides</Link>.
        </p>
        </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        <div className="bg-gradient-to-t from-transparent to-slate-100 dark:to-slate-900 p-8 rounded-3xl flex flex-col items-start gap-3">
          <div className="size-11 bg-neutral-600 rounded-xl flex items-center justify-center">
            <CodeBracketSquareIcon className="size-6 text-white" />
          </div>
          <h3 className="pt-3 text-xl font-bold text-slate-800 dark:text-white">
            Widget Embed
          </h3>
          <p className="text-lg font-medium text-slate-500 dark:text-slate-300 leading-relaxed max-w-sm flex flex-grow">
            Add your form to any website with a simple script, no extra work
            needed.
          </p>
          <Link href="/auth/signin" className="pt-3">
            <Button>
              Try It Out Now
              <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
        </div>
        <div className="bg-gradient-to-t from-transparent to-slate-100 dark:to-slate-900 p-8 rounded-3xl flex flex-col items-start gap-3">
          <div className="size-11 bg-neutral-600 rounded-xl flex items-center justify-center">
            <FilterIcon className="size-6 text-white fill-white" />
          </div>
          <h3 className="pt-3 text-xl font-bold text-slate-800 dark:text-white">
            Filtering
          </h3>
          <p className="text-lg font-medium text-slate-500 dark:text-slate-300 leading-relaxed max-w-sm flex flex-grow">
            Filter submissions by their content, only receive the ones
            you&apos;d like to keep.
          </p>
          <Link href="/auth/signin" className="pt-3">
            <Button>
              Try It Out Now
              <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
        </div>
        <div className="bg-gradient-to-t from-transparent to-slate-100 dark:to-slate-900 p-8 rounded-3xl flex flex-col items-start gap-3">
          <div className="size-11 bg-[#5865F2] rounded-xl flex items-center justify-center">
            <Discord className="size-7 text-inherit text-white" />
          </div>
          <h3 className="pt-3 text-xl font-bold text-slate-800 dark:text-white">
            Active Support
          </h3>
          <p className="text-lg font-medium text-slate-500 dark:text-slate-300 leading-relaxed max-w-sm flex flex-grow">
            What ever the issue may be, we’re here to help you resolve it.
          </p>
          <a href="https://discord.gg/FZTVYjMTWq" target="_blank" className="pt-3">
            <Button className="bg-[#5865F2] hover:bg-[#6974f3] text-white">
                Join Our Discord
                <ArrowRightIcon className="size-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
