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
  theme,
} from "antd";
import { CompanySizes, Countries } from "../config/businessConfig";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { DownOutlined } from "@ant-design/icons";
import { Span } from "../config/layoutConfig";

export const ContactPage = () => {
  const { token } = theme.useToken();

  return (
    <Flex vertical className="aurora-light">
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
              <Form style={{ width: "100%" }}>
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
                    <Form.Item style={{ flex: 1 }}>
                      <Input placeholder="First name" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }}>
                      <Input placeholder="Last name" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }}>
                      <Input placeholder="Work email" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }}>
                      <Input placeholder="Company" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }}>
                      <Input placeholder="Phone number" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[2]}>
                    <Form.Item style={{ flex: 1 }}>
                      <Select
                        options={CompanySizes}
                        placeholder="Company size"
                      />
                    </Form.Item>
                  </Col>

                  <Col {...Span[1]}>
                    <Form.Item>
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
                    <Form.Item>
                      <Select placeholder="How can we help you?" />
                    </Form.Item>
                  </Col>

                  <Col {...Span[1]}>
                    <Form.Item>
                      <Input.TextArea
                        placeholder="Message"
                        autoSize={{ minRows: 5, maxRows: 10 }}
                      />
                    </Form.Item>
                  </Col>

                  <Col {...Span[1]}>
                    <Form.Item noStyle>
                      <Button type="primary" style={{ width: "100%" }}>
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
                        <Typography.Link href="https://www.tc-workflow.com/terms-and-conditions">
                          Terms and Conditions
                        </Typography.Link>{" "}
                        and{" "}
                        <Typography.Link href="https://www.tc-workflow.com/privacy-policy">
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
