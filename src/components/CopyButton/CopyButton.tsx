import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";

type Props = {
  code: string;
};
function CopyButton({ code }: Props) {
  return (
    <button className="absolute text-white cursor-pointer top-3 right-3">
      <CopyToClipboard text={code} onCopy={() => alert("Copied!")}>
        <div>
          <FaRegCopy />
        </div>
      </CopyToClipboard>
    </button>
  );
}

export default CopyButton;
