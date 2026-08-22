import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMoreHorizSquare = ({ title, titleId, ...props }, ref) => {
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
        d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M5 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m5 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMoreHorizSquare.displayName = "SvgSiMoreHorizSquare";
const ForwardRef = forwardRef(SvgSiMoreHorizSquare);
const Memo = memo(ForwardRef);
export default Memo;
