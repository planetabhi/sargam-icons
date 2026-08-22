import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiActivity = ({ title, titleId, ...props }, ref) => {
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
        d="M1 12h4l4 9 7-18 3 9h4"
      />
    </svg>
  );
};
SvgSiActivity.displayName = "SvgSiActivity";
const ForwardRef = forwardRef(SvgSiActivity);
const Memo = memo(ForwardRef);
export default Memo;
