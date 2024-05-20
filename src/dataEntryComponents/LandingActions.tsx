import { Button, Flex, theme } from "antd";
import { PricingButton } from "./PricingButton";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const LandingActions = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const routeToContact = () => navigate("/contact");

  return (
    <Flex align="center" gap={16}>
      <Flex>
        <PricingButton
          href="https://www.stepworkflow.thecloudworlds.com"
          target="_blank"
          variant="solid"
        >
          Get started
        </PricingButton>
      </Flex>

      <Flex>
        <Button
          iconPosition="end"
          type="link"
          icon={<RightOutlined style={{ fontSize: 10 }} />}
          style={{ color: token.colorWhite, fontWeight: 600 }}
          onClick={routeToContact}
          className="link-hover"
        >
          Contact sales
        </Button>
      </Flex>
    </Flex>
  );
};
