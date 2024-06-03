import { Flex } from "antd";
import { Accordion } from "../dataEntryComponents/Accordion";
import { LandingTitle } from "./LandingTitle";
import { Pill } from "./Pill";
import { HelpRounded } from "@mui/icons-material";

const faqs = [
  {
    question: "Is TCSW free? Do I need to sign up to use it?",
    answer: (
      <p>
        Yes, TCSW offers both free and paid versions.
        <p className="mt-4">
          TCSW Free Tier is free to use and only requires you to sign up. With
          TCSW Free Tier, you have access to all basic workflow features without
          any limitations.
        </p>
      </p>
    ),
  },
  {
    question: "Can I get a refund if I don't find what I'm looking for?",
    answer: (
      <p>
        Yes, we offer a refund if you are not satisfied and do not find what
        you're looking for.
        <p className="mt-4">
          Please contact our customer support team to initiate the refund
          process.
        </p>
      </p>
    ),
  },
  {
    question: "Is TCSW for beginners? Can non-technical people use it?",
    answer: (
      <p>
        TCSW is designed for professionals with intermediate technical skills.
        However, non-technical people can also easily use and manage a workload
        of workflows thanks to its intuitive interface.
        <p className="mt-4">
          If you are a non-technical user, it may be helpful to seek assistance
          from an intermediate developer to ensure that you can effectively
          utilise TCSW.
        </p>
      </p>
    ),
  },
];
export const LandingFAQ = () => {
  return (
    <Flex
      vertical
      className="ml-auto mr-auto max-w-screen-2xl px-4 lg:px-24 py-16 w-full"
      align="center"
      gap={32}
    >
      <Flex>
        <Pill>
          <HelpRounded /> FAQ
        </Pill>
      </Flex>
      <LandingTitle>Frequently Asked Question</LandingTitle>
      <Flex vertical gap={32} className="w-full lg:w-[50vw]">
        {faqs.map((faq, i) => (
          <Accordion question={faq.question} answer={faq.answer} key={i} />
        ))}
      </Flex>
    </Flex>
  );
};
