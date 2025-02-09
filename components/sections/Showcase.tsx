const Showcase = () => {
    return (
        <section id="demos" className="bg-white dark:bg-slate-950 flex flex-col gap-28 pt-24 sm:pt-28 pb-10 sm:pb-20">
            {/* 1 */}
            <div className="px-10">
                <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-20">
                    <div className="flex flex-col items-center lg:items-start gap-6 order-1 lg:order-2">
                        <h1 className="text-slate-800 dark:text-white text-3xl leading-[2.6rem] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold max-w-lg text-center lg:text-left">
                            Gather data faster<br />{' '}with Discord
                        </h1>
                        <p className="text-lg font-medium text-slate-500 dark:text-slate-300 leading-relaxed max-w-md text-center lg:text-left">
                            We provide multiple input types to choose from, making it easy to collect the data you need.
                        </p>
                    </div>
                    <div className="flex items-center justify-center order-2 lg:order-1">
                        <img alt="Discord Webhook" draggable={false} src="/showcase.svg" className="px-4 sm:px-0 block dark:hidden object-cover w-full h-full max-w-lg" />
                        <img alt="Discord Webhook" draggable={false} src="/showcase-dark.svg" className="px-4 sm:px-0 hidden dark:block object-cover w-full h-full max-w-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase;
