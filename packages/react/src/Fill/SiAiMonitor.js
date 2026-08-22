import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiMonitor = ({ title, titleId, ...props }, ref) => {
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
        d="M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm-3-8.703a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-6.853 5.09c-.232-.93-1.52-.959-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.96 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAiMonitor.displayName = "SvgSiAiMonitor";
const ForwardRef = forwardRef(SvgSiAiMonitor);
const Memo = memo(ForwardRef);
export default Memo;
