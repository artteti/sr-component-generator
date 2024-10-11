import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CodeBlock from "../CodeBlock/CodeBlock";
type Props = {
  children: string;
};

const typescriptCode = `type Props = {
    children: string;
  };
  export const Text = ({ children }: Props) => {
    return <p>{children}</p>;
  };
`;
export const Text = ({ children }: Props) => {
  return (
    <>
      <p>{children}</p>
      <CodeBlock style={vs2015} code={typescriptCode} language={"typescript"} />
    </>
  );
};
