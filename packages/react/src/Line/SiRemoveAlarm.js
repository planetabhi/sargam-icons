import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiRemoveAlarm = ({ title, titleId, ...props }, ref) => {
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
        d="M8 13h8m2-10 3 3M3 6l3-3m14 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      />
    </svg>
  );
};
SvgSiRemoveAlarm.displayName = "SvgSiRemoveAlarm";
const ForwardRef = forwardRef(SvgSiRemoveAlarm);
const Memo = memo(ForwardRef);
export default Memo;
