import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiExpandMore = ({ title, titleId, ...props }, ref) => {
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
        d="m8 10 4 4 4-4"
      />
    </svg>
  );
};
SvgSiExpandMore.displayName = "SvgSiExpandMore";
const ForwardRef = forwardRef(SvgSiExpandMore);
const Memo = memo(ForwardRef);
export default Memo;
