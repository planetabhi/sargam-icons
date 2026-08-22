import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiFactAlt1 = ({ title, titleId, ...props }, ref) => {
  const generatedId = useId();
  const validTitleId = titleId || generatedId;
  const isTitlePresent = !!title;
  return (
    <svg
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden={!isTitlePresent}
      aria-labelledby={titleId}
      ref={ref}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M8 11.796a1 1 0 0 1-.203.203 1 1 0 0 1 .203.203A1 1 0 0 1 8.203 12 1 1 0 0 1 8 11.796"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.4 4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4zM19 14a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zM7.078 9.594c.233-.93 1.52-.958 1.818-.087l.025.087.297 1.187 1.187.297c.96.24.96 1.603 0 1.843l-1.187.297-.297 1.187c-.24.96-1.603.96-1.843 0l-.297-1.187-1.187-.297c-.959-.24-.96-1.603 0-1.843l1.187-.297zM19 11a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zm0-3a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAiFactAlt1.displayName = "SvgSiAiFactAlt1";
const ForwardRef = forwardRef(SvgSiAiFactAlt1);
const Memo = memo(ForwardRef);
export default Memo;
