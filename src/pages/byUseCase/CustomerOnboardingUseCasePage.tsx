import { Flex } from "antd";
import { HeaderHeight } from "../../layoutComponents/AppHeader";
import { LandingContainer } from "../../dataDisplayComponents/LandingContainer";

export const CustomerOnboardingUseCasePage = () => {
  return (
    <Flex vertical>
      <Flex vertical className="bg-img overflow-hidden items-center">
        <div style={{ height: HeaderHeight }} />
        <LandingContainer>
          <div>Test</div>
        </LandingContainer>
      </Flex>
    </Flex>
  );
};
