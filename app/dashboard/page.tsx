import Navigation from '@/components/dashboard/Navigation';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Webhook Forms - Dashboard',
  description: 'The quickest way to collect your user feedback, sending responses to your favourite apps.',
};

const Page = () => {
  return (
    <div>
      <Navigation />
      <div className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-7xl w-full flex flex-col gap-10 items-start">
          <h1 className="text-slate-800 dark:text-white text-2xl leading-tight sm:text-3xl sm:leading-tight lg:text-4xl lg:leading-tight font-bold max-w-2xl">
            Dashboard
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Page;
