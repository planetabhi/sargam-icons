import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiChevronRightSquare = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.5 16 4-4-4-4M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
      />
    </svg>
  );
};
SvgSiChevronRightSquare.displayName = "SvgSiChevronRightSquare";
const ForwardRef = forwardRef(SvgSiChevronRightSquare);
const Memo = memo(ForwardRef);
export default Memo;
