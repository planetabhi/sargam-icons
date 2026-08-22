import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMonitorCheck = ({ title, titleId, ...props }, ref) => {
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
        fillOpacity={0.16}
        d="M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v8.2A2.4 2.4 0 0 0 4.4 17h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M9 20h6m-6-9.5 2 2 4-4M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4"
      />
    </svg>
  );
};
SvgSiMonitorCheck.displayName = "SvgSiMonitorCheck";
const ForwardRef = forwardRef(SvgSiMonitorCheck);
const Memo = memo(ForwardRef);
export default Memo;
