import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMemory = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M10 2a1 1 0 0 1 1 1v2h2V3a1 1 0 1 1 2 0v2h1.6A2.4 2.4 0 0 1 19 7.4V9h2a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v1.6a2.4 2.4 0 0 1-2.4 2.4H15v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2H7.4A2.4 2.4 0 0 1 5 16.6V15H3a1 1 0 1 1 0-2h2v-2H3a1 1 0 1 1 0-2h2V7.4A2.4 2.4 0 0 1 7.4 5H9V3a1 1 0 0 1 1-1m3.4 7h-2.8A1.6 1.6 0 0 0 9 10.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 13.4 9"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMemory.displayName = "SvgSiMemory";
const ForwardRef = forwardRef(SvgSiMemory);
const Memo = memo(ForwardRef);
export default Memo;
