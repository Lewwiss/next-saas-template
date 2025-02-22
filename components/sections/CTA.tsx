import { Button } from "../ui/button";

const CTA = () => {
    return (
        <section className="p-10 sm:py-20">
            <div className="bg-input/50 p-10 sm:p-16 mx-auto max-w-6xl w-full rounded-2xl flex flex-col gap-6 overflow-hidden">
                <h2 className="text-3xl leading-tight sm:text-4xl sm:leading-tight font-bold max-w-xl mx-auto text-center">
                    Get started with this template.
                </h2>
                <div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-1.5">
                    <a href="/auth/signin">
                        <Button size="lg">
                            Get Started Now
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTA;
