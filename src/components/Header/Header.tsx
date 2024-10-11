import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CodeBlock from "../CodeBlock/CodeBlock";
type Props = {
  children: string;
};
const typescriptCode = `type Props = {
    children: string;
  };
  export const Header = ({ children }: Props) => {
    return (
        <h2 className="text-2xl text-blue-500">{children}</h2>
  };
`;

export const Header = ({ children }: Props) => {
  return (
    <>
      <h2 className="text-2xl text-blue-500">{children}</h2>
      <CodeBlock style={vs2015} code={typescriptCode} language={"typescript"} />
    </>
  );
};
