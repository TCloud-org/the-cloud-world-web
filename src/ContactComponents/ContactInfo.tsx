import { Col, Row } from "antd";
import { SectionContainer } from "../dataDisplayComponents/SectionContainer";
import { Span } from "../config/layoutConfig";

const info = [
  {
    title: "General",
    children: (
      <p>
        Get in touch through{" "}
        <a
          className="text-[#f4d8ff] hover:!text-[#f4d8ffd1] transition-all duration-300"
          href="mailto:tungdinh@thecloudworlds.com"
          target="_blank"
          rel="noreferrer"
        >
          tungdinh@thecloudworlds.com
        </a>
      </p>
    ),
  },
  {
    title: "Support",
    children: (
      <div>
        <p>+1 (425) 229-8028</p>
        <p>9am - 5pm M - F</p>
      </div>
    ),
  },
  {
    title: "Location",
    children: <p>Bellevue, WA</p>,
  },
  {
    title: "Sales",
    children: <p>Speak to us about plans, pricing, or request a demo</p>,
  },
];

export const ContactInfo = () => {
  return (
    <SectionContainer>
      <Row gutter={[24, 24]} className="px-16">
        {info.map((item, i) => (
          <Col {...Span[4]} key={i}>
            <div className="p-6">
              <p className="text-gradient text-base">{item.title}</p>

              <div className="text-white text-base break-words">
                {item.children}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </SectionContainer>
  );
};
