import { Flex } from "antd";
import { Accordion } from "../dataEntryComponents/Accordion";
import { LandingTitle } from "./LandingTitle";
import { Pill } from "../dataDisplayComponents/Pill";

const faqs = [
  {
    question: "Is my data safe and protected?",
    answer:
      "Yes, we take customer data security seriously at TCW. Our servers are hosted on the largest data center in AWS. We ensure our application is always up-to-date with the latest security patches, and all our plans include SSL encryption to keep your data safe.",
  },
  {
    question: "Is TCW for beginners? Can non-technical people use it?",
    answer: (
      <p>
        TCW is designed for professionals with intermediate technical skills.
        However, non-technical people can also easily use and manage a workload
        of workflows thanks to its intuitive interface.
        <p className="mt-4">
          If you are a non-technical user, it may be helpful to seek assistance
          from an intermediate developer to ensure that you can effectively
          utilise TCW.
        </p>
      </p>
    ),
  },
  {
    question: "Is TCW free? Do I need to sign up to use it?",
    answer: (
      <p>
        Yes, TCW offers both free and paid versions.
        <p className="mt-4">
          TCW Lite is free to use and only requires you to sign up. With TCW
          Lite, you have access to all basic workflow features without any
          limitations.
        </p>
      </p>
    ),
  },
  {
    question: "What types of payment do you accept?",
    answer: (
      <p>
        We process payments through Stripe, which accepts all major debit and
        credit cards from customers in every country. For more details, you can
        check out all{" "}
        <a
          href="https://stripe.com/payments/features#payment-options"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-6 hover:text-white transition-all duration-300 underline hover:underline"
        >
          payment options
        </a>{" "}
        supported by Stripe.
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
          Please contact our{" "}
          <a
            href="/contact"
            className="text-neutral-6 hover:text-white transition-all duration-300 underline hover:underline"
          >
            customer support
          </a>{" "}
          team to initiate the refund process.
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
        <Pill>Got questions?</Pill>
      </Flex>
      <LandingTitle>We Have The Answers</LandingTitle>
      <Flex vertical gap={32} className="w-full lg:w-[50vw]">
        {faqs.map((faq, i) => (
          <Accordion question={faq.question} answer={faq.answer} key={i} />
        ))}
      </Flex>
    </Flex>
  );
};
