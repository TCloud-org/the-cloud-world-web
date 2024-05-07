import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { Flex, Typography } from "antd";

const textColor = "#f8fafc";

export const SyntaxHighlighter = (props: {
  children?: string;
  language: "java" | "javascript" | "python";
}) => {
  const { children = "", language = "java" } = props;

  const [copy, setCopy] = useState(false);

  return (
    <div
      className="bg-[#0a1021] rounded-xl overflow-hidden"
      style={{ border: "1px solid #1e293b" }}
    >
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: "1px solid #222c3f" }}
      >
        <Flex align="center" gap={16}>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <Typography.Text style={{ color: textColor }}>Java</Typography.Text>
        </Flex>

        {copy ? (
          <button style={{ color: textColor }}>Copied</button>
        ) : (
          <button
            style={{ color: textColor }}
            onClick={() => {
              navigator.clipboard.writeText(children);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 1500);
            }}
          >
            Copy
          </button>
        )}
      </div>
      <ReactSyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{
          padding: "27px",
          fontSize: "0.75rem",
          backgroundColor: "#0a1021",
          color: textColor,
        }}
      >
        {`${children}`}
      </ReactSyntaxHighlighter>
    </div>
  );
};
