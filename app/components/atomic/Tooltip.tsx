import classNames from "classnames";
import type { ReactNode } from "react";

export default function Tooltip({ children }: { children?: ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      {/* Toolip Content */}
      <div
        className={classNames(
          "relative z-20 p-2 text-base bg-white border border-gray-300 rounded-lg",
          "font-bold text-green-600 leading-normal flex items-center"
        )}
      >
        {children}
      </div>
      {/* Tooltip Pointy Arrow */}
      <div className="z-10">
        <div className="h-3 w-3 bg-white -rotate-45 transform origin-top-left border border-gray-300"></div>
      </div>
    </div>
  );
}
