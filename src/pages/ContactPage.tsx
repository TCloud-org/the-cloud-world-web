import {
  AutoComplete,
  Button,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Typography,
  message,
  theme,
} from "antd";
import { CompanySizes, Countries } from "../config/businessConfig";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { DownOutlined } from "@ant-design/icons";
import { Span } from "../config/layoutConfig";
import { wosContactMe } from "../config/wosEndpointConfig";
import axios from "axios";
import { useState } from "react";

export const ContactPage = () => {
  const { token } = theme.useToken();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const [sentLoading, setSentLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setSentLoading(true);
    await axios.post(wosContactMe, { ...form.getFieldsValue() });
    setSentLoading(false);
    messageApi.success("Message sent!");
  };

  return (
    <Flex vertical>
      {contextHolder}
      <Flex vertical>
        <div style={{ height: HeaderHeight }} />

        <Row gutter={[64, 64]} style={{ padding: 64 }}>
          <Col {...Span[2]}>
            <Flex vertical gap={16}>
              <Typography.Title level={1} style={{ fontSize: 48 }}>
                Contact our sales team
              </Typography.Title>

              <Typography.Paragraph style={{ fontSize: 20, fontWeight: 300 }}>
                Ready to onboard to our platform that helps{" "}
                <Typography.Text strong style={{ fontSize: 20 }}>
                  cut costs, simplify asynchronous tasks, and improve customer
                  experience?
                </Typography.Text>
              </Typography.Paragraph>

              <Typography.Paragraph style={{ fontSize: 20, fontWeight: 300 }}>
                At The Cloud World, we offer system workflow for asynchronous
                processes, simple-but-elegant email notifications, and more
              </Typography.Paragraph>

              <Typography.Text strong style={{ fontSize: 20 }}>
                Let's get started today
              </Typography.Text>
            </Flex>
          </Col>

          <Col {...Span[2]}>
            <Flex
              flex={1}
              className="shadow"
              style={{
                borderRadius: token.borderRadius,
                padding: 32,
                background: token.colorBgContainer,
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
                      <Typography.Text strong style={{ fontSize: 18 }}>
                        Leave your message and we will connect you with our
                        teams
                      </Typography.Text>
                    </Form.Item>
                  </Col>
                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }} name="firstName">
                      <Input placeholder="First name" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }} name="lastName">
                      <Input placeholder="Last name" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }} name="email">
                      <Input placeholder="Work email" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }} name="company">
                      <Input placeholder="Company" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }}>
                      <Input placeholder="Phone number" name="phone" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }} name="companySize">
                      <Select
                        options={CompanySizes}
                        placeholder="Company size"
                      />
                    </Form.Item>
                  </Col>

                  <Col {...Span[1]}>
                    <Form.Item name="country">
                      <AutoComplete
                        options={Countries}
                        placeholder="Country"
                        allowClear
                        filterOption={(inputValue, option) =>
                          option!.label
                            .toLowerCase()
                            .indexOf(inputValue.toLowerCase()) !== -1
                        }
                        suffixIcon={<DownOutlined />}
                      />
                    </Form.Item>
                  </Col>

                  <Col {...Span[1]}>
                    <Form.Item name="topic">
                      <Select
                        placeholder="How can we help you?"
                        options={[{ label: "General", value: "general" }]}
                      />
                    </Form.Item>
                  </Col>

                  <Col {...Span[1]}>
                    <Form.Item name="message">
                      <Input.TextArea
                        placeholder="Message"
                        autoSize={{ minRows: 5, maxRows: 10 }}
                      />
                    </Form.Item>
                  </Col>

                  <Col {...Span[1]}>
                    <Form.Item noStyle>
                      <Button
                        type="primary"
                        style={{ width: "100%" }}
                        onClick={handleSubmit}
                        loading={sentLoading}
                      >
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>

                  <Col {...Span[1]}>
                    <Divider style={{ backgroundColor: token.colorBorder }} />
                  </Col>

                  <Col {...Span[1]}>
                    <Form.Item noStyle>
                      <Typography.Text>
                        By submitting this form, you agree to our{" "}
                        <Typography.Link href="https://www.stepworkflow.thecloudworlds.com/terms-and-conditions">
                          Terms and Conditions
                        </Typography.Link>{" "}
                        and{" "}
                        <Typography.Link href="https://www.stepworkflow.thecloudworlds.com/privacy-policy">
                          Privacy Policy
                        </Typography.Link>
                      </Typography.Text>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};
