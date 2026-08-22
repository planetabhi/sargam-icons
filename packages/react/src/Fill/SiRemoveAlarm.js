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
        fill="currentColor"
        d="M6.707 3.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zm10.586-1.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0M8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiRemoveAlarm.displayName = "SvgSiRemoveAlarm";
const ForwardRef = forwardRef(SvgSiRemoveAlarm);
const Memo = memo(ForwardRef);
export default Memo;
