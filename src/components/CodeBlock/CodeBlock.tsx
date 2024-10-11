import SyntaxHighlighter from "react-syntax-highlighter";
import CopyButton from "../CopyButton/CopyButton";

type Props = {
  code: string;
  language: string;
  style: any;
};
export default function CodeBlock({ code, style, language }: Props) {
  return (
    <div className="relative mt-6">
      <CopyButton code={code} />
      <SyntaxHighlighter
        language={language}
        style={style}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
        showInlineLineNumbers={false}
        customStyle={{
          border: "1px solid #c3c3c3",
          borderRadius: "5px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
