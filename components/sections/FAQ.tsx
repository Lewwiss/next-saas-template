import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20 px-10 relative" id="faq">
      <div className="mx-auto max-w-6xl w-full flex flex-col items-center gap-6">
        <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-bold max-w-4xl mx-auto text-center">
          Frequently asked questions
        </h1>
        <p className="text-lg leading-relaxed mx-auto max-w-lg text-center">
          If you have any other questions please contact us.
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-1 items-start gap-10 pt-3 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="question-1">
              <AccordionTrigger>Question 1</AccordionTrigger>
              <AccordionContent>
                Question 1 Answer
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-2">
              <AccordionTrigger>Question 2</AccordionTrigger>
              <AccordionContent>
                Question 2 Answer
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-3">
              <AccordionTrigger>Question 3</AccordionTrigger>
              <AccordionContent>
                Question 3 Answer
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-4">
              <AccordionTrigger>Question 4</AccordionTrigger>
              <AccordionContent>
                Question 4 Answer
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
