import { Col, Row } from "antd";
import { Span } from "../config/layoutConfig";
import { LandingTitle } from "./LandingTitle";
import { Pill } from "../dataDisplayComponents/Pill";
import { SectionContainer } from "../dataDisplayComponents/SectionContainer";
import { UseCaseCard } from "../dataDisplayComponents/UseCaseCard";

const useCases = [
  {
    title: "Modularize a large system",
    imageUrl: "https://tcw-images.s3.us-west-2.amazonaws.com/usecase-2.png",
    description: (
      <>
        <p>
          Imagine you have an API responsible for registering a customer. This
          API may entail a series of intricate steps, such as validating whether
          the user is a returning customer, creating a new user profile, or
          recovering from a legacy account. Additionally, it might involve
          setting up customer profiles and billing payments through third-party
          platforms like Stripe.
        </p>
        <p>
          However, bundling a sequence of 5 or more steps into a single API can
          significantly increase latency, impacting customer experience and
          raising internal maintenance costs.
        </p>
        <p>
          That's where our platform comes in. Designed to address this very
          challenge, our solution allows you to orchestrate a sequence of steps
          seamlessly. By modularizing and orchestrating individual components,
          you can streamline the process, optimize API performance, and maintain
          each component more effectively.
        </p>
      </>
    ),
  },
  {
    title: "Manage a notification system",
    imageUrl: "https://tcw-images.s3.us-west-2.amazonaws.com/usecase-2.svg",
    description: (
      <>
        <p>
          Imagine you have an e-commerce order system. The standard processes in
          this system include a sequence of steps such as order confirmation,
          order processing, shipping updates, delivery updates, and feedback
          requests. During this flow, there are several pending processes like
          waiting for the order to be prepared and receiving shipping status
          updates. These pending processes are often unpredictable but can be
          automated.
        </p>
        <p>
          With our workflow solution, we support a pending state to handle these
          waits for upcoming notifications. We provide an API that allows other
          platforms to notify your workflow when changes occur in the current
          transaction. By integrating with our solution, you save valuable time
          and resources, reducing the complexity and headaches associated with
          managing an event-driven architecture.
        </p>
      </>
    ),
  },
];
export const LandingUseCase = () => {
  return (
    <SectionContainer>
      <Pill>Use Case</Pill>

      <LandingTitle>Right Solution Right Customer</LandingTitle>

      <div className="relative z-10">
        <Row gutter={[32, 32]} className="mt-8 px-0 lg:px-8">
          {useCases.map((useCase, i) => (
            <Col key={i} {...Span[2]} className="flex flex-col">
              <UseCaseCard
                imageUrl={useCase.imageUrl}
                title={useCase.title}
                description={useCase.description}
              />
            </Col>
          ))}
        </Row>
        <div className="absolute left-0 right-0 -top-[10%] bottom-0 bg-primary-blue-800 rounded-full blur-[150px] opacity-20 -z-10" />
      </div>
    </SectionContainer>
  );
};
