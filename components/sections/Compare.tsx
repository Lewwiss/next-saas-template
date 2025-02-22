import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

const Compare = () => {
  return (
    <section className="py-20 px-10 flex flex-col gap-10" id="steps">
      <div className="mx-auto max-w-6xl w-full flex flex-col items-center gap-6">
        <h2 className="text-3xl leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold max-w-4xl mx-auto text-center">
          Compare our features
        </h2>
        <p className="text-lg leading-relaxed mx-auto max-w-lg text-center">
          Show off your features in a comparison table.
        </p>
      </div>
      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ul className="flex flex-col gap-5">
          {Array.from({ length: 3 }, (_, i) => i + 1).map((index) => (
            <li
              className="border border-input flex flex-row gap-4 p-6 rounded-xl"
              key={index}
            >
              <div className="shrink-0 size-8 rounded-full border border-input flex items-center justify-center">
                <CheckIcon className="size-4" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Add your feature here</h3>
                <p className="leading-relaxed">
                  This is a description of the feature.
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-5 opacity-60">
          {Array.from({ length: 3 }, (_, i) => i + 1).map((index) => (
            <li
              className="bg-input/50 flex flex-row gap-4 p-6 rounded-xl"
              key={index}
            >
              <div className="shrink-0 size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <XMarkIcon className="size-4" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Add your feature here</h3>
                <p className="leading-relaxed">
                  This is a description of the feature.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Compare;
