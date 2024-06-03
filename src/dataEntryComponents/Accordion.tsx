import { ReactNode, useState } from "react";

export const Accordion = (props: {
  question?: ReactNode;
  answer?: ReactNode;
}) => {
  const { question, answer } = props;

  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-full py-4 px-8 bg-neutral-12 rounded-lg">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center text-white text-lg"
      >
        <span className="font-bold">{question}</span>
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-200 ease-in-out text-white text-md ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};
