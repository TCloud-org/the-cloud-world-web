import {
  AutoFixHighRounded,
  DeveloperBoardRounded,
  GitHub,
  LinkedIn,
  SignalCellularAltRounded,
  X,
} from "@mui/icons-material";
import { Col, Row } from "antd";
import { LandingTitle } from "../LandingComponents/LandingTitle";
import { Span, createSpan } from "../config/layoutConfig";
import { Pill } from "../dataDisplayComponents/Pill";
import { SectionContainer } from "../dataDisplayComponents/SectionContainer";
import { StarsBackground } from "../dataDisplayComponents/StarsBackground";
import { HeaderHeight } from "../layoutComponents/AppHeader";
import { cloneElement, useEffect } from "react";
import { LandingCallToAction } from "../LandingComponents/LandingCallToAction";
import ReactGA from "react-ga4";

const missions = [
  {
    icon: <AutoFixHighRounded />,
    description: (
      <p>
        <span className="text-white">Craft a winning solution</span> that not
        only draws in more customers but also saves you a ton of maintenance
        costs.
      </p>
    ),
  },
  {
    icon: <DeveloperBoardRounded />,
    description: (
      <p>
        <span className="text-white">Compute your resources</span> with
        lightning-fast speed, ultra-sleek design, and mind-blowingly
        effectiveness.
      </p>
    ),
  },
  {
    icon: <SignalCellularAltRounded />,
    description: (
      <p>
        <span className="text-white">Scale your product</span> with robustness
        and speed, helping you deliver more features for your customers faster.
      </p>
    ),
  },
];

const team = [
  {
    name: "Tung Dinh",
    imageUrl:
      "https://utfs.io/f/a4803614-e76c-49ca-a261-7f15d2ea664a-85kop.png",
    bio: "Transitioning from a UW CS undergraduate to a Software Engineer at Amazon, his impactful contributions drive the integration of cutting-edge technology, dedicated to tackling the most intricate challenges in cloud computing.",
    position: "Founder & CEO",
    social: [
      {
        href: "https://www.linkedin.com/in/tungxd96",
        icon: <LinkedIn />,
      },
      {
        href: "https://x.com/tungxd301",
        icon: <X />,
      },
      {
        href: "https://github.com/tungxd96",
        icon: <GitHub />,
      },
    ],
  },
];

export const AboutPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/about",
      title: "About",
    });
  }, []);

  return (
    <div className="bg-dark">
      <div className="relative py-32">
        <StarsBackground />

        <div style={{ height: HeaderHeight }} />

        <SectionContainer>
          <div className="flex flex-col gap-8 items-center max-w-screen-md px-2">
            <Pill>This is The Cloud World</Pill>

            <LandingTitle className="z-10 !text-white">
              <span className="text-gradient">Optimize</span> your cloud
              architecture at scale
            </LandingTitle>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer>
        <Row gutter={[32, 32]} className="px-4 lg:px-12">
          <Col {...createSpan(8)} className="flex flex-col items-center">
            <div className="text-[#e5e5f9] text-[44px]">What we do</div>
          </Col>

          <Col {...createSpan(16)} className="flex flex-col items-start ">
            <p className="text-lg text-description">
              At our core, we are dedicated to driving positive change by
              developing and implementing innovative solutions that empower your
              cloud architecture. We aim to address pressing challenges and
              create lasting impact across various domains such as financial,
              healthcare, education, e-commerce, and beyond.
            </p>
          </Col>
        </Row>
      </SectionContainer>

      <SectionContainer className="lighting-bg-2 px-4 lg:px-12">
        <Row gutter={[32, 32]} className="w-full">
          {missions.map((mission, i) => (
            <Col {...createSpan(8)} key={i} className="flex flex-col">
              <div className="glass-card flex gap-6 h-full">
                <div className="text-white">{mission.icon}</div>
                <p className="text-description text-base">
                  {mission.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </SectionContainer>

      <SectionContainer>
        <div className="flex flex-col gap-12 items-center px-4 lg:px-12">
          <Pill>Meet the team</Pill>

          <Row gutter={[32, 32]} className="w-full justify-center">
            {team.map((member, i) => (
              <Col {...Span[2]} key={i} className="flex flex-col">
                <div className="team-layer-1 h-full">
                  <div className="team-layer-2 p-12 flex flex-col gap-4">
                    <div className="flex gap-4 items-start">
                      <img
                        alt={member.name}
                        src={member.imageUrl}
                        className="rounded-full w-12 h-12"
                      />
                      <p className="text-white text-lg font-semibold">
                        {member.name}
                        <p className="text-base text-description font-normal">
                          {member.position}
                        </p>
                      </p>
                    </div>

                    <p className="text-base text-description font-normal">
                      {member.bio}
                    </p>

                    <div className="flex gap-4 mt-1">
                      {member.social.map((item, j) => (
                        <a
                          key={`${i}-${j}`}
                          href={item.href}
                          className="text-description hover:!text-white transition-all duration-300 rounded-full h-8 w-8 flex justify-center items-center border border-[#CBCBE8BF] bg-[#02031C66] hover:!bg-[#02031C8F] hover:border-white"
                        >
                          {cloneElement(item.icon, {
                            style: {
                              fontSize: 16,
                            },
                          })}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </SectionContainer>

      <LandingCallToAction />
    </div>
  );
};
