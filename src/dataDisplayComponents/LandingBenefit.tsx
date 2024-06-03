import { VerifiedRounded } from "@mui/icons-material";
import { Col, Flex, Image, Row } from "antd";
import { useState } from "react";
import { createSpan } from "../config/layoutConfig";
import { LandingInfo } from "./LandingInfo";
import { LandingTitle } from "./LandingTitle";
import { Pill } from "./Pill";
import { Step } from "./Step";

const benefits = [
  {
    section: "Cost Efficiency Excellence",
    title: "Save at least $5,000 monthly per feature",
    description: (
      <div>
        <p>
          Typically, implementing a new feature can span from 1 to 4 weeks, or
          even longer, varying by the size of the project. Adhering to the{" "}
          <a href="https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle">
            Open-Closed Principle
          </a>
          , efficient software allows for extension while remaining closed to
          direct modification.
        </p>
        <p>
          With our workflow solution, we empower you to seamlessly extend your
          features without touching the existing system and moving faster.
        </p>
      </div>
    ),
  },
  {
    section: "Time and Energy Efficiency",
    title:
      "Eliminate all the burdens of managing complex processes and boost productivity by at least 50%",
    description: (
      <div>
        <p>
          Imagine a world where you don't have to worry about the complexities
          of managing your infrastructure. With our solution, that dream becomes
          a reality. No more spending hours recreating the same infrastructure
          in your backend or dealing with tedious boilerplate code.
        </p>
        <p>
          We're here to simplify your life and make your workflow smoother than
          ever before. Say goodbye to operational overhead and hello to
          hassle-free productivity.
        </p>
      </div>
    ),
  },
  {
    section: "Improved Customer Satisfaction",
    title: "Increase your customer retention and adoption rate by at least 15%",
    description: (
      <div>
        <p>
          An optimal API translates to faster response times for your customers,
          paving the way for heightened satisfaction levels. Every interaction
          becomes a seamless experience, leaving a lasting positive impression.
        </p>
        <p>
          With quicker responses and smoother transactions, your customers are
          not only more likely to return but also to spread the word, attracting
          new customers to your platform. It's not just about efficiency—it's
          about building a reputation for excellence and fostering long-term
          relationships with every interaction.
        </p>
      </div>
    ),
  },
];

export const LandingBenefit = () => {
  const commonColStyles =
    "py-6 px-4 border-b-[4px] border-transparent cursor-pointer hover:bg-neutral-11/30 transition-all duration-300 flex justify-start lg:justify-center";
  const firstStyle =
    "rounded-tl-lg rounded-tr-lg lg:rounded-tr-none rounded-bl-none lg:rounded-bl-lg";
  const lastStyle =
    "rounded-tr-none lg:rounded-tr-lg rounded-br-lg rounded-bl-lg lg:rounded-bl-none";

  const [benefitIndex, setBenefitIndex] = useState<number>(0);

  const getClassName = (i: number) => {
    if (i === 0) {
      return firstStyle;
    }
    if (i === benefits.length - 1) {
      return lastStyle;
    }
    return "";
  };

  return (
    <Flex
      vertical
      align="center"
      className="py-16 ml-auto mr-auto max-w-screen-2xl mt-32"
      gap={32}
    >
      <Pill>
        <VerifiedRounded /> Guarantees
      </Pill>

      <LandingTitle>No Code No Compromise</LandingTitle>

      <Flex className="w-full px-8 lg:px-12 pt-20 z-10 relative" gap={32}>
        <div className="top-0 left-0 right-0 -bottom-[150%] dot-bg-dark absolute -z-10" />
        <Row
          gutter={[0, 0]}
          className="border rounded-lg border-neutral-10 bg-neutral-12 text-white w-full z-10"
        >
          {benefits.map((benefit, i) => (
            <Col
              {...createSpan(8)}
              key={i}
              className={`${commonColStyles} ${getClassName(i)} ${benefitIndex === i ? "!border-primary-purple-700" : ""}`}
              onClick={() => setBenefitIndex(i)}
            >
              <div className="flex items-center gap-4 text-white font-semibold text-lg px-2">
                <Step>{`B${i + 1}`}</Step>
                <div className="text-lg">{benefit.section}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Flex>

      <div className="z-10 w-full px-0 lg:px-16 mt-12">
        <LandingInfo
          className="!items-start"
          title={benefits[benefitIndex].title}
          description={benefits[benefitIndex].description}
          demonstration={
            <div className="relative z-10 hidden lg:block w-[150%]">
              <Image
                src="https://tcw-images.s3.us-west-2.amazonaws.com/landing-benefit-1.png"
                preview={false}
                className="rounded-[40px]"
              />
              <div className="absolute left-0 right-0 -top-[10%] bottom-0 bg-[#5000B5] rounded-full blur-[150px] opacity-40 -z-10" />
            </div>
          }
          position="right"
          gutter={[64, 64]}
        />
      </div>
    </Flex>
  );
};
