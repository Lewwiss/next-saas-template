"use client";

import {
  BoltIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

const Features = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-20 px-10 flex flex-col gap-10" id="features">
      <div className="mx-auto max-w-6xl w-full flex flex-col items-center gap-6">
        <h2 className="text-3xl leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold max-w-4xl mx-auto text-center">
          Show off your features
        </h2>
        <p className="text-lg leading-relaxed mx-auto max-w-lg text-center">
          Display the features of your product or service.
        </p>
      </div>

      <div className="w-full mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 items-center gap-10">

        <div className="col-span-2 w-full flex flex-col gap-5">
          {/* Feature 1 */}
          <button onClick={() => setSelected(0)} className={`${selected === 0 ? 'bg-input/50' : ''} duration-200 border border-input flex flex-row gap-4 p-6 rounded-xl`}>
            <div className={`${selected === 0 ? 'bg-primary text-primary-foreground' : ''} duration-200 shrink-0 size-8 rounded-full border border-input flex items-center justify-center`}>
              <UserIcon className="size-4" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-lg font-bold">Add your feature here</h3>
              <p className="leading-relaxed">
                This is a description of the feature.
              </p>
            </div>
          </button>

          {/* Feature 2 */}
          <button onClick={() => setSelected(1)} className={`${selected === 1 ? 'bg-input/50' : ''} duration-200 border border-input flex flex-row gap-4 p-6 rounded-xl`}>
          <div className={`${selected === 1 ? 'bg-primary text-primary-foreground' : ''} duration-200 shrink-0 size-8 rounded-full border border-input flex items-center justify-center`}>
              <BoltIcon className="size-4" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-lg font-bold">Add your feature here</h3>
              <p className="leading-relaxed">
                This is a description of the feature.
              </p>
            </div>
          </button>

          {/* Feature 3 */}
          <button onClick={() => setSelected(2)} className={`${selected === 2 ? 'bg-input/50' : ''} duration-200 border border-input flex flex-row gap-4 p-6 rounded-xl`}>
          <div className={`${selected === 2 ? 'bg-primary text-primary-foreground' : ''} duration-200 shrink-0 size-8 rounded-full border border-input flex items-center justify-center`}>
              <StarIcon className="size-4" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-lg font-bold">Add your feature here</h3>
              <p className="leading-relaxed">
                This is a description of the feature.
              </p>
            </div>
          </button>
        </div>

        <div className="hidden lg:block col-span-3 mx-auto max-w-xl w-full bg-input/50 rounded-xl aspect-video" />
      </div>
    </section>
  );
};

export default Features;
