import {
  ContentCopyRounded,
  LibraryAddCheckRounded,
} from "@mui/icons-material";
import { Flex, Tooltip } from "antd";
import { useState } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Segmented } from "../dataEntryComponents/Segmented";

const textColor = "#f8fafc";
const borderColor = "#222c3f";

export const SyntaxHighlighter = (props: {
  children?: string;
  language: "java" | "javascript" | "python";
}) => {
  const { children = "", language = "java" } = props;

  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  return (
    <div
      className="bg-[#0a1021] rounded-xl overflow-hidden"
      style={{ border: `1px solid ${borderColor}` }}
    >
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: `1px solid ${borderColor}` }}
      >
        <Flex align="center" gap={16}>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <Segmented
            value="java"
            options={[
              {
                label: "Java",
                value: "java",
              },
            ]}
          />
        </Flex>

        {copy ? (
          <Tooltip title="Copied">
            <LibraryAddCheckRounded
              style={{ color: textColor, fontSize: 18 }}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Copy">
            <ContentCopyRounded
              style={{ color: textColor, cursor: "pointer", fontSize: 18 }}
              onClick={handleCopy}
            />
          </Tooltip>
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
