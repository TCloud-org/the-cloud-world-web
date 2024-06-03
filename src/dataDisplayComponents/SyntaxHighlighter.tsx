import {
  ContentCopyRounded,
  LibraryAddCheckRounded,
} from "@mui/icons-material";
import { Flex, Tooltip } from "antd";
import { useState } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Segmented } from "../dataEntryComponents/Segmented";
import { ScreenDots } from "./ScreenDots";
import { Light as LightSyntaxHighlighter } from "react-syntax-highlighter";
import java from "react-syntax-highlighter/dist/esm/languages/hljs/java";

const textColor = "#ffffff";

export const SyntaxHighlighter = (props: {
  children?: string;
  language: "java" | "javascript" | "python";
  showToolbar?: boolean;
}) => {
  const { children = "", language = "java", showToolbar } = props;

  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  return (
    <div className="bg-neutral-12/30 rounded-xl overflow-hidden border border-neutral-10/50">
      {showToolbar && (
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-10/50">
          <Flex align="center" gap={16}>
            <ScreenDots />

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
      )}
      <ReactSyntaxHighlighter
        language={language}
        style={atomOneDark}
        showLineNumbers
        lineNumberStyle={{
          color: "#5b5966",
        }}
        customStyle={{
          scrollbarWidth: "none",
          overflow: "auto",
          padding: "27px",
          fontSize: "0.75rem",
          backgroundColor: "rgb(22 20 39 / 0.5)",
          color: textColor,
        }}
      >
        {`${children}`}
      </ReactSyntaxHighlighter>
    </div>
  );
};

LightSyntaxHighlighter.registerLanguage("java", java);
