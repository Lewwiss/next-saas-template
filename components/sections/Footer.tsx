import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 px-10 bg-white dark:bg-slate-950 text-slate-800 dark:text-white">
      <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-10">
        <div className="col-span-2 sm:col-span-3 xl:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex flex-row items-center gap-3">
            <h2 className="font-title text-xl font-bold leading-relaxed text-slate-800 dark:text-white pt-1">Webhook Forms</h2>
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            © {new Date().getFullYear()} Webhook Forms. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold leading-relaxed">Navigation</h2>
          <ul className="flex flex-col gap-1.5">
            <li>
              <Link href="/">
                <Button variant="link" className="px-0 text-base">
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <Button variant="link" className="px-0 text-base">
                  Pricing
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/guides">
                <Button variant="link" className="px-0 text-base">
                  Guides
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold leading-relaxed">Terms</h2>
          <ul className="flex flex-col gap-1.5">
            <li>
              <Link href="/legal/tos">
                <Button variant="link" className="px-0 text-base">
                  Terms Of Service
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy-policy">
                <Button variant="link" className="px-0 text-base">
                  Privacy Policy
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold leading-relaxed">More</h2>
          <ul className="flex flex-col gap-1.5">
            <li>
              <Link href="/auth/signin">
                <Button variant="link" className="px-0 text-base">
                  Sign In
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/auth/signin">
                <Button variant="link" className="px-0 text-base">
                  Sign Up
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
