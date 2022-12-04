import classNames from "classnames";
import { useState } from "react";
import CheckMarkIcon from "../atomic/CheckMarkIcon";
import CopyIcon from "../atomic/CopyIcon";
import Tooltip from "../atomic/Tooltip";

export default function CoppiedTooltip({ onClick }: { onClick: () => void }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div
        className={classNames(
          `absolute -top-12 translate-y-0 opacity-100 transition-all duration-75 ease-in-out select-none`,
          {
            "translate-y-10 opacity-0 invisible": !show,
          }
        )}
      >
        <Tooltip>
          <div className="flex items-center ">
            Coppied&nbsp;
            <CheckMarkIcon />
          </div>
        </Tooltip>
      </div>
      <button
        onClick={() => {
          onClick();
          setShow(true);
          setTimeout(() => setShow(false), 1000);
        }}
        className="flex items-center bg-stone-200 rounded-lg hover:bg-stone-300 py-1 px-2 text-sm"
      >
        Copy URL <CopyIcon />
      </button>
    </div>
  );
}
