import Account from "@/components/dashboard/Account";
import Navigation from "@/components/sections/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {};

const Page = () => {
  return (
    <div>
      <Navigation variant="dashboard" />
      <Account />
    </div>
  );
};

export default Page;
