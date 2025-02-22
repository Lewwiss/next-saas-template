import Dashboard from "@/components/dashboard/Dashboard";
import Navigation from "@/components/sections/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {};

const Page = () => {
  return (
    <div>
      <Navigation variant="dashboard" />
      <Dashboard />
    </div>
  );
};

export default Page;
