import Link from "next/link";
import Logo from "../ui/logo";

const links = {
  navigation: [
    { href: "/components", text: "Components" },
    { href: "/docs", text: "Docs" },
    { href: "/pricing", text: "Pricing" },
  ],
  terms: [
    { href: "/legal/tos", text: "Terms Of Service" },
    { href: "/legal/privacy-policy", text: "Privacy Policy" },
  ],
  more: [
    { href: "/auth/signin", text: "Sign In" },
    { href: "/auth/signin", text: "Sign Up" },
  ],
};

const Footer = () => {
  return (
    <footer className="py-20 px-10">
      <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-10">
        <div className="col-span-2 sm:col-span-3 xl:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex flex-row items-center gap-2">
            <Logo className="size-4" />
            <h2 className="text-lg font-bold leading-relaxed">Template</h2>
          </Link>
          <p>© {new Date().getFullYear()} Template. All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold leading-relaxed">Navigation</h3>
          <ul className="flex flex-col gap-3">
            {links.navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-sm transition-colors hover:text-foreground/80 text-foreground"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold leading-relaxed">Terms</h3>
          <ul className="flex flex-col gap-3">
            {links.terms.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-sm transition-colors hover:text-foreground/80 text-foreground"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold leading-relaxed">More</h3>
          <ul className="flex flex-col gap-3">
            {links.more.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-sm transition-colors hover:text-foreground/80 text-foreground"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
