import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSouthEast = ({ title, titleId, ...props }, ref) => {
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
        d="m8 8 8 8m0 0v-5m0 5h-5"
      />
    </svg>
  );
};
SvgSiSouthEast.displayName = "SvgSiSouthEast";
const ForwardRef = forwardRef(SvgSiSouthEast);
const Memo = memo(ForwardRef);
export default Memo;
