import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CodeBlock from "../CodeBlock/CodeBlock";

type Props = {
  label: string;
};

const typescriptCode = `export const Button = () => {
    return (
        <button className="border-2 rounded-md  border-blue-500 bg-blue-100 px-2 hover:bg-blue-200">
          Button
        </button>
    );
  };
`;
export const Button = ({ label }: Props) => {
  return (
    <>
      <button className="border-2 rounded-md  border-blue-500 bg-blue-100 px-2 hover:bg-blue-200">
        {label}
      </button>
      <CodeBlock style={vs2015} code={typescriptCode} language={"typescript"} />
    </>
  );
};
