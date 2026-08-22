import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiViewCompact = ({ title, titleId, ...props }, ref) => {
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
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M7 19V4m5 15V4m5 15V4M2 9h20M2 14h20M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 16.6V6.4A2.4 2.4 0 0 1 4.4 4"
      />
    </svg>
  );
};
SvgSiViewCompact.displayName = "SvgSiViewCompact";
const ForwardRef = forwardRef(SvgSiViewCompact);
const Memo = memo(ForwardRef);
export default Memo;
