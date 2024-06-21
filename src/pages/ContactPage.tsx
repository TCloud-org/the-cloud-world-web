import { CheckRounded } from "@mui/icons-material";
import { Col, Divider, Form, Input, Row, Typography, message } from "antd";
import axios from "axios";
import { ContactInfo } from "../ContactComponents/ContactInfo";
import { LandingCallToAction } from "../LandingComponents/LandingCallToAction";
import { LandingTitle } from "../LandingComponents/LandingTitle";
import { CompanySizes, Countries } from "../config/businessConfig";
import { Span } from "../config/layoutConfig";
import { wosContactMe } from "../config/wosEndpointConfig";
import { Pill } from "../dataDisplayComponents/Pill";
import { StarsBackground } from "../dataDisplayComponents/StarsBackground";
import { FooterLink } from "../dataEntryComponents/FooterLink";
import { ThemeButton } from "../dataEntryComponents/ThemeButton";
import { ThemeInput } from "../dataEntryComponents/ThemeInput";
import { ThemeSelect } from "../dataEntryComponents/ThemeSelect";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { LandingFAQ } from "../LandingComponents/LandingFAQ";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const topics = [
  {
    label: "General Inquiries",
    value: "general",
  },
  {
    label: "Career Inquiries",
    value: "career",
  },
  {
    label: "Business Inquiries",
    value: "business",
  },
  {
    label: "Technical Inquiries",
    value: "technical",
  },
  {
    label: "Partnership Inquiries",
    value: "partnership",
  },
];

const supports = [
  "General support",
  "Business support",
  "Technical support",
  "Partnership support",
];

export const ContactPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/contact",
      title: "Contact",
    });
  }, []);

  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    await axios.post(wosContactMe, { ...form.getFieldsValue() });
    messageApi.success("Message sent!");
  };

  return (
    <>
      {contextHolder}
      <div className="bg-dark">
        <div className="relative !font-sora ">
          <StarsBackground />
          <div style={{ height: HeaderHeight }} />

          <div className="ml-auto mr-auto max-w-screen-2xl">
            <Row gutter={[64, 64]} className="p-4 lg:p-16">
              <Col {...Span[2]}>
                <div className="flex flex-col gap-8 items-start">
                  <Pill>Contact us</Pill>

                  <LandingTitle className="!text-white !text-[52px] text-start !font-sora">
                    How can we help you?
                  </LandingTitle>

                  <p className="text-white !font-sora text-base">
                    Feel free to get in touch with us however you please. For
                    form and email inquiries, we usually reply within 24 hours.
                  </p>

                  <div className="flex flex-col gap-4">
                    {supports
                      .sort((a, b) => a.localeCompare(b))
                      .map((support, i) => (
                        <div
                          className="flex items-center gap-2 text-white font-sora"
                          key={i}
                        >
                          <CheckRounded />

                          <p>{support}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </Col>

              <Col {...Span[2]}>
                <div
                  className="p-4 lg:p-8 rounded-3xl border bg-dark"
                  style={{
                    borderColor: "rgba(131, 104, 242, 0.3)",
                    boxShadow:
                      "rgba(164, 143, 255, 0.12) 0px -7px 120px 0px inset",
                  }}
                >
                  <Form
                    style={{ width: "100%" }}
                    form={form}
                    onValuesChange={(_, values) => form.setFieldsValue(values)}
                  >
                    <Row gutter={20}>
                      <Col {...Span[1]}>
                        <Form.Item>
                          <Typography.Text
                            strong
                            style={{ fontSize: 18 }}
                            className="text-neutral-5"
                          >
                            Leave your message and we will connect you with our
                            teams
                          </Typography.Text>
                        </Form.Item>
                      </Col>
                      <Col {...Span[2]}>
                        <Form.Item style={{ flex: 1 }} name="firstName">
                          <ThemeInput placeholder="First name" />
                        </Form.Item>
                      </Col>

                      <Col {...Span[2]}>
                        <Form.Item style={{ flex: 1 }} name="lastName">
                          <ThemeInput placeholder="Last name" />
                        </Form.Item>
                      </Col>

                      <Col {...Span[2]}>
                        <Form.Item style={{ flex: 1 }} name="email">
                          <ThemeInput placeholder="Work email" />
                        </Form.Item>
                      </Col>

                      <Col {...Span[2]}>
                        <Form.Item style={{ flex: 1 }} name="company">
                          <ThemeInput placeholder="Company" />
                        </Form.Item>
                      </Col>

                      <Col {...Span[2]}>
                        <Form.Item style={{ flex: 1 }} name="phone">
                          <ThemeInput placeholder="Phone number" />
                        </Form.Item>
                      </Col>

                      <Col {...Span[2]}>
                        <Form.Item style={{ flex: 1 }} name="companySize">
                          <ThemeSelect
                            options={CompanySizes}
                            placeholder="Company size"
                          />
                        </Form.Item>
                      </Col>

                      <Col {...Span[1]}>
                        <Form.Item name="country">
                          <ThemeSelect
                            options={Countries}
                            placeholder="Country"
                          />
                        </Form.Item>
                      </Col>

                      <Col {...Span[1]}>
                        <Form.Item name="topic">
                          <ThemeSelect
                            placeholder="How can we help you?"
                            options={topics.sort((a, b) =>
                              a.label.localeCompare(b.label)
                            )}
                          />
                        </Form.Item>
                      </Col>

                      <Col {...Span[1]}>
                        <Form.Item name="message">
                          <Input.TextArea
                            size="large"
                            placeholder="Message"
                            autoSize={{ minRows: 5, maxRows: 10 }}
                          />
                        </Form.Item>
                      </Col>

                      <Col {...Span[1]}>
                        <Form.Item noStyle>
                          <ThemeButton onClick={handleSubmit}>
                            Submit
                          </ThemeButton>
                        </Form.Item>
                      </Col>

                      <Col {...Span[1]}>
                        <Divider className="bg-neutral-10" />
                      </Col>

                      <Col {...Span[1]}>
                        <Form.Item noStyle>
                          <div className="text-neutral-7">
                            By submitting this form, you agree to our{" "}
                            <FooterLink
                              className="!text-neutral-6 hover:!text-white"
                              href="https://www.stepworkflow.thecloudworlds.com/terms-and-conditions"
                            >
                              Terms of Service
                            </FooterLink>{" "}
                            and{" "}
                            <FooterLink
                              className="!text-neutral-6 hover:!text-white"
                              href="https://www.stepworkflow.thecloudworlds.com/privacy-policy"
                            >
                              Privacy Policy
                            </FooterLink>
                          </div>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <ContactInfo />

        <LandingFAQ />

        <LandingCallToAction />
      </div>
    </>
  );
};
