import { Col, Flex, Row } from "antd";
import { SectionContainer } from "./SectionContainer";
import { Span } from "../config/layoutConfig";

const blogs = [
  {
    id: "optimize-api-with-multi-step-workflow",
    title: "API Optimization With Multi-Step Workflow",
    description:
      "Check out the most powerful technique to optimize a complex system",
    date: "05/29/24",
    readingTime: 7,
  },
];

export const LandingBlog = () => {
  return (
    <SectionContainer>
      <div className="px-12 w-full">
        <div
          className="w-full rounded-3xl backdrop-blur-[5px] border border-neutral-11 p-20"
          style={{ boxShadow: "inset 0 -7px 120px #a48fff1f" }}
        >
          <Row gutter={[32, 32]}>
            <Col {...Span[2]}>
              <div className="flex flex-col gap-4">
                <div className="bg-gradient-to-br from-washed-purple-100 to-washed-purple-500 bg-clip-text text-transparent font-sora">
                  Blog
                </div>

                <div className="text-[48px] font-sora text-white font-medium">
                  <span className="bg-gradient-to-br from-washed-purple-100 to-washed-purple-500 bg-clip-text text-transparent">
                    Stay informed.
                  </span>{" "}
                  Stay inspired.
                </div>

                <div className="text-base text-neutral-5 font-sora">
                  Insights from The Cloud World: exploring the intersection of
                  automation and business
                </div>
              </div>
            </Col>

            <Col {...Span[2]}>
              {blogs.map((blog, i) => (
                <a
                  key={i}
                  className="flex gap-10 cursor-pointer w-full"
                  href={`https://www.blog.thecloudworlds.com/${blog.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt={blog.id}
                    src="https://tcw-images.s3.us-west-2.amazonaws.com/default-blog-img.png"
                    className="rounded-xl w-[150px] h-[150px] object-cover"
                  />

                  <Flex flex={1}>
                    <Row gutter={[0, 16]}>
                      <Col span={24}>
                        <div className="text-[22px] font-medium font-sora text-white">
                          {blog.title}
                        </div>
                      </Col>

                      <Col span={24} className="flex flex-col justify-end">
                        <div className="text-neutral-7 text-base font-sora">
                          {blog.date} • {blog.readingTime} min
                        </div>
                      </Col>
                    </Row>
                  </Flex>
                </a>
              ))}
            </Col>
          </Row>
        </div>
      </div>
    </SectionContainer>
  );
};
