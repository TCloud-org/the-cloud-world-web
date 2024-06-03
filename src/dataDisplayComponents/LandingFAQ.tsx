import { Flex } from "antd";
import { Accordion } from "../dataEntryComponents/Accordion";
import { LandingTitle } from "./LandingTitle";
import { Pill } from "./Pill";
import { HelpRounded } from "@mui/icons-material";

export const LandingFAQ = () => {
  return (
    <Flex
      vertical
      className="ml-auto mr-auto max-w-screen-2xl px-24 py-16"
      align="center"
      gap={32}
    >
      <Flex>
        <Pill>
          <HelpRounded /> FAQ
        </Pill>
      </Flex>
      <LandingTitle>Frequently Asked Question</LandingTitle>
      <Accordion title="Test" answer="Testing" />
    </Flex>
  );
};
