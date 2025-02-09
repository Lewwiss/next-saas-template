import { RocketLaunchIcon } from "@heroicons/react/20/solid";
import { Button } from "../ui/button";

const CTA = () => {
    return (
        <section className="bg-white dark:bg-slate-950 py-10 sm:py-20 px-10">
            <div className="relative p-10 sm:p-16 mx-auto max-w-7xl w-full bg-slate-900 rounded-[2rem] flex flex-col gap-4 sm:gap-6 overflow-hidden">
                <h1 className="text-white text-3xl leading-[2.6rem] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold max-w-md lg:max-w-xl mx-auto text-center">
                    Start collecting data quicker today
                </h1>
                <div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-1.5">
                    <a href="/auth/signin">
                        <Button size="lg">
                            <RocketLaunchIcon className="size-5" />
                            Get Started For Free
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTA;
