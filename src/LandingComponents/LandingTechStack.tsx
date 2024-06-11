import { useEffect, useRef } from "react";
import { AWSLogo } from "../svg/AWSLogo";
import { DockerLogo } from "../svg/DockerLogo";
import { GithubLogo } from "../svg/GithubLogo";
import { KafkaLogo } from "../svg/KafkaLogo";
import { MySQLLogo } from "../svg/MySQLLogo";
import { NetlifyLogo } from "../svg/NetlifyLogo";
import { StripeLogo } from "../svg/StripeLogo";

const stack = [
  {
    logo: <KafkaLogo />,
    title: "Apache Kafka",
    href: "https://kafka.apache.org",
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
    logo: <NetlifyLogo />,
    title: "Netlify",
    href: "https://www.netlify.com",
  },
];

export const LandingTechStack = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const scrollerInner = scroller.querySelector(
        ".scroller__inner"
      ) as HTMLElement & { children: HTMLCollection };
      if (!scrollerInner) return;

      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });

      scroller.setAttribute("data-animated", "true");
    }
  }, []);

  return (
    <div className="mt-24 border-t border-t-neutral-11 border-b border-b-neutral-11">
      <div
        className="max-w-screen-2xl ml-auto mr-auto py-8 scroller"
        data-speed="medium"
        ref={scrollerRef}
      >
        <ul className="tag-list scroller__inner">
          {stack.map((item, j) => (
            <li key={j} className="flex justify-center items-center">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 64 }}
                className="text-neutral-6 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {item.logo}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
