import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="pt-10 sm:pt-20 pb-20 px-10 bg-white dark:bg-slate-950 relative">
      <div className="absolute -top-20" id="faq" />
      <div className="mx-auto max-w-7xl w-full flex flex-col items-center gap-6">
        <h1 className="text-slate-800 dark:text-white text-3xl leading-[2.6rem] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold max-w-4xl mx-auto text-center">
          Frequently asked questions
        </h1>
        <p className="text-lg font-medium text-slate-500 dark:text-slate-300 leading-relaxed mx-auto max-w-sm text-center">
          If you have any other questions, feel free to contact us in our <a href="https://discord.gg/FZTVYjMTWq" target="_blank" className="hover:underline underline-offset-4">support server</a>.
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-1 items-start gap-10 pt-3 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I embed the form on my website?</AccordionTrigger>
              <AccordionContent>
                You can embed the form by using the provided code snippet from our dashboard.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How many forms can I create?</AccordionTrigger>
              <AccordionContent>
                With our pro plan you can create as many forms as you&apos;d like. There are no limits!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I add multiple webhooks to a form?</AccordionTrigger>
              <AccordionContent>
                Yes, you can add multiple webhooks to a single form. Each webhook will receive the form submission.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is extra support available?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer extra support for all our users. Join our <a href="https://discord.gg/FZTVYjMTWq" className="hover:underline hover:underline-offset-4">support server</a> for more information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
