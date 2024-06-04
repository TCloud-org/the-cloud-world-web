import { Button, Col, Input, Row } from "antd";
import { Span } from "../config/layoutConfig";

export const JoinNewspaper = () => {
  return (
    <div
      className="p-8 border border-neutral-11 backdrop-blur-[5px] w-full rounded-xl"
      style={{ boxShadow: "inset 0 -7px 120px #a48fff1f" }}
    >
      <Row>
        <Col {...Span[2]} className="flex flex-col items-start">
          <div className="text-lg text-neutral-7 font-semibold">
            Join our newsletter
          </div>
        </Col>
        <Col {...Span[2]} className="flex flex-col items-end">
          <div className="flex flex-col items-start gap-4">
            <div className="flex gap-4">
              <Input
                className="bg-neutral-12/50 hover:bg-neutral-12/50 focus:bg-neutral-12/50 border-neutral-10 hover:border-neutral-10 focus:border-neutral-7 text-white foot-placeholder w-[300px]"
                size="large"
                placeholder="Enter your email"
              />
              <Button
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
          </div>
        </Col>
      </Row>
    </div>
  );
};
