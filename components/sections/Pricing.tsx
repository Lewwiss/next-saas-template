"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import ButtonCheckout from "../ui/button-checkout";

const plan1Features = ["Feature 1", "Feature 2"];

const plan2Features = ["Feature 1", "Feature 2"];

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

        {/* Trust Badge */}
        <p className="pt-3 flex flex-row flex-wrap items-center justify-center gap-1.5 text-sm text-foreground/50">
          Payments secured with
          <a href="https://stripe.com/" target="_blank">
            <svg
              className="h-5 text-foreground"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2499 1037"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M261.062 466.079C207.229 446.167 177.727 430.68 177.727 406.344C177.727 385.691 194.69 373.894 224.928 373.894C280.238 373.894 337.019 395.282 376.106 414.452L398.23 278.025C367.257 263.274 303.833 238.938 216.079 238.938C154.132 238.938 102.506 255.16 65.6361 285.398C27.2843 317.107 7.37279 362.832 7.37279 418.142C7.37279 518.435 68.5841 561.211 168.142 597.345C232.301 620.205 253.689 636.433 253.689 661.504C253.689 685.841 233.037 699.851 195.426 699.851C148.966 699.851 72.2732 676.991 22.1239 647.495L0 785.398C42.771 809.735 122.417 834.806 205.017 834.806C270.647 834.806 325.221 819.32 362.096 789.823C403.391 757.373 424.779 709.441 424.779 647.495C424.779 544.983 362.096 502.212 261.062 466.079ZM784.939 385.691L807.063 250H690.266V85.2766L533.23 111.117L510.553 250L455.321 258.96L434.646 385.691H510.326V651.919C510.326 721.239 528.025 769.176 564.159 798.673C594.397 823.009 637.904 834.806 699.115 834.806C746.311 834.806 775.072 826.698 794.983 821.532V677.727C783.921 680.68 758.85 685.841 741.886 685.841C705.752 685.841 690.266 667.406 690.266 625.371V385.691H784.939ZM1135.69 242.074C1084.07 242.074 1042.77 269.176 1026.55 317.849L1015.49 250H855.459V823.745H1038.35V451.327C1061.21 423.302 1093.66 413.169 1137.9 413.169C1147.49 413.169 1157.82 413.169 1170.35 415.382V246.499C1157.82 243.551 1146.75 242.074 1135.69 242.074ZM1306.79 193.214C1359.88 193.214 1402.65 149.707 1402.65 96.6096C1402.65 42.7711 1359.88 6.10352e-05 1306.79 6.10352e-05C1252.95 6.10352e-05 1210.18 42.7711 1210.18 96.6096C1210.18 149.707 1252.95 193.214 1306.79 193.214ZM1214.6 250H1398.23V823.745H1214.6V250ZM1918.6 301.621C1886.15 259.585 1841.17 238.938 1783.64 238.938C1730.55 238.938 1684.09 261.062 1640.58 307.522L1630.99 250H1470.22V1036.13L1653.11 1005.9V821.532C1681.13 830.382 1709.89 834.806 1735.71 834.806C1781.43 834.806 1847.8 823.009 1899.42 766.964C1948.83 713.125 1973.91 629.795 1973.91 519.912C1973.91 422.566 1955.47 348.822 1918.6 301.621ZM1766.68 655.603C1751.93 683.628 1729.07 698.379 1702.52 698.379C1684.09 698.379 1667.86 694.69 1653.11 687.318V414.452C1684.09 382.008 1712.11 378.319 1722.43 378.319C1768.89 378.319 1791.75 428.468 1791.75 526.549C1791.75 582.594 1783.64 626.106 1766.68 655.603ZM2498.25 531.709C2498.25 440.266 2478.34 367.992 2439.25 317.107C2399.42 265.487 2339.69 238.938 2263.73 238.938C2108.12 238.938 2011.52 353.982 2011.52 538.346C2011.52 641.593 2037.33 719.027 2088.21 768.435C2133.94 812.683 2199.57 834.806 2284.38 834.806C2362.55 834.806 2434.82 816.372 2480.55 786.134L2460.64 660.769C2415.65 685.105 2363.29 698.379 2304.29 698.379C2268.89 698.379 2244.56 691.001 2226.86 675.514C2207.68 659.292 2196.62 632.743 2192.94 595.133H2496.03C2496.77 586.283 2498.25 544.983 2498.25 531.709ZM2191.46 483.037C2196.62 401.178 2218.74 362.832 2260.78 362.832C2302.08 362.832 2323.47 401.919 2326.42 483.037H2191.46Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
