import { Flex } from "antd";
import { AWSLogo } from "../svg/AWSLogo";
import { DockerLogo } from "../svg/DockerLogo";
import { FigmaLogo } from "../svg/FigmaLogo";
import { GithubLogo } from "../svg/GithubLogo";
import { MySQLLogo } from "../svg/MySQLLogo";
import { ReactLogo } from "../svg/ReactLogo";
import { StripeLogo } from "../svg/StripeLogo";

const stack = [
  {
    logo: <ReactLogo />,
    title: "React.js",
    href: "https://react.dev",
  },
  {
    logo: <AWSLogo />,
    title: "AWS",
    href: "https://aws.amazon.com",
  },
  {
    logo: <StripeLogo />,
    title: "Stripe",
    href: "https://stripe.com",
  },
  {
    logo: <GithubLogo />,
    title: "Github",
    href: "https://github.com",
  },
  {
    logo: <DockerLogo />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    logo: <MySQLLogo />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    logo: <FigmaLogo />,
    title: "Figma",
    href: "https://www.figma.com",
  },
];

export const LandingTechStack = () => {
  return (
    <Flex className="mt-24 border-t border-t-neutral-11 border-b border-b-neutral-11">
      <div className="max-w-screen-2xl ml-auto mr-auto py-12 w-full">
        <div className="gallery">
          {stack.map((item, j) => (
            <div key={j} className="flex justify-center">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 64 }}
                className="text-neutral-6 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {item.logo}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Flex>
  );
};
