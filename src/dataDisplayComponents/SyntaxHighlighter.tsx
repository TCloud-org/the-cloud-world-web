import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

export const SyntaxHighlighter = (props: {
  children?: string;
  language: "java" | "javascript" | "python";
}) => {
  const { children = "", language = "java" } = props;

  const [copy, setCopy] = useState(false);

  return (
    <div className="bg-[#282C34] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {copy ? (
          <button className="text-white">Copied</button>
        ) : (
          <button
            className="text-white"
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
        customStyle={{ padding: "27px", fontSize: "0.75rem" }}
      >
        {`${children}`}
      </ReactSyntaxHighlighter>
    </div>
  );
};
