import Link from "next/link";
import { Button } from "../ui/button";

const Preview = () => {
    return (
        <section id="demos" className="px-10 flex flex-col gap-16 py-20 sm:pb-20">
            <h2 className="mx-auto text-slate-800 dark:text-white text-3xl leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-semibold text-center">
                Discover issues before your users
            </h2>
            <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-3 bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-2xl font-medium">Spelling mistake<div className="bg-yellow-500 size-2 rounded-full ml-auto" /></div>
                    <div className="flex flex-row items-center gap-3 bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-2xl font-medium">Broken link<div className="bg-rose-500 size-2 rounded-full ml-auto" /></div>
                    <div className="flex flex-row items-center gap-3 bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-2xl font-medium">Spelling mistake<div className="bg-yellow-500 size-2 rounded-full ml-auto" /></div>
                    <div className="flex flex-row items-center gap-3 bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-2xl font-medium">Broken image<div className="bg-rose-500 size-2 rounded-full ml-auto" /></div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-3 bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-2xl font-medium">Broken link<div className="bg-rose-500 size-2 rounded-full ml-auto" /></div>
                    <div className="flex flex-row items-center gap-3 bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-2xl font-medium">Spelling mistake<div className="bg-yellow-500 size-2 rounded-full ml-auto" /></div>
                    <div className="flex flex-row items-center gap-3 bg-slate-100 dark:bg-slate-900 px-4 py-3 rounded-2xl font-medium">Broken image<div className="bg-rose-500 size-2 rounded-full ml-auto" /></div>
                </div>

                <div className="flex items-center justify-center flex-col gap-1.5">
                    <h2 className="mx-auto px-10 text-slate-800 dark:text-white text-4xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-semibold text-center">
                        20+
                    </h2>
                    <p className="mx-auto font-medium text-slate-500 dark:text-slate-300 text-lg leading-relaxed max-w-md text-center">Issues Discovered</p>
                    <Link href="/auth/signin" className="mt-3">
                        <Button size="lg" className="text-base">
                        Get Started For Free
                        </Button>
                    </Link>
                </div>
                
            </div>
        </section>
    )
}

export default Preview;
