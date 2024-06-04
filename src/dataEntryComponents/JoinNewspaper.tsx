import { Button, Col, Input, Row } from "antd";
import { Span } from "../config/layoutConfig";
import { useState } from "react";
import axios from "axios";
import { AMS_SUBSCRIBE_NEWSLETTER_ENDPOINT } from "../config/amsEndpointConfig";

export const JoinNewspaper = () => {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<string>("NOT_SUBSCRIBED");

  const renderSubscription = () => {
    if (subscribed === "SUBSCRIBED") {
      return (
        <div className="text-white text-lg">
          You're now subscribed to our newsletter
        </div>
      );
    }

    if (subscribed === "ALREADY_SUBSCRIBED") {
      return (
        <div className="text-white text-lg">
          You've already subscribed to our newsletter
        </div>
      );
    }

    return (
      <>
        <div className="flex gap-4">
          <Input
            className="bg-neutral-12/50 hover:bg-neutral-12/50 focus:bg-neutral-12/50 border-neutral-10 hover:border-neutral-10 focus:border-neutral-7 text-white foot-placeholder w-full lg:w-[300px]"
            size="large"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={handleSubscribe}
            size="large"
            type="text"
            className="hover:!bg-transparent border border-white text-white hover:border-neutral-7 hover:!text-neutral-7 transition-all duration-300"
          >
            Subscribe
          </Button>
        </div>

        <div className="text-neutral-7">
          By subscribing you agree to with our{" "}
          <a
            href="https://stepworkflow.thecloudworlds.com/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-6 hover:text-white transition-all duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </>
    );
  };

  const handleSubscribe = async () => {
    const res = await axios
      .post(AMS_SUBSCRIBE_NEWSLETTER_ENDPOINT, {
        email: email,
      })
      .catch((err) => undefined);

    if (res) {
      setSubscribed("SUBSCRIBED");
    } else {
      setSubscribed("ALREADY_SUBSCRIBED");
    }
  };

  return (
    <div
      className="p-8 border border-neutral-11 backdrop-blur-[5px] w-full rounded-xl"
      style={{ boxShadow: "inset 0 -7px 120px #a48fff1f" }}
    >
      <Row gutter={[0, 16]}>
        <Col {...Span[2]} className="flex flex-col items-start">
          <div className="text-lg text-neutral-7 font-semibold">
            Join our newsletter
          </div>
        </Col>
        <Col {...Span[2]} className="flex flex-col items-end">
          <div className="flex flex-col items-start gap-4">
            {renderSubscription()}
          </div>
        </Col>
      </Row>
    </div>
  );
};
