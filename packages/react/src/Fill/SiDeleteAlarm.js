import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiDeleteAlarm = ({ title, titleId, ...props }, ref) => {
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
        d="M6.707 2.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m10.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16m3.536-10.121a1 1 0 1 0-1.415-1.414L12 11.585l-2.121-2.12a1 1 0 0 0-1.415 1.414L10.586 13l-2.122 2.121a1 1 0 1 0 1.415 1.415L12 14.414l2.121 2.122a1 1 0 0 0 1.415-1.415l-2.122-2.12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiDeleteAlarm.displayName = "SvgSiDeleteAlarm";
const ForwardRef = forwardRef(SvgSiDeleteAlarm);
const Memo = memo(ForwardRef);
export default Memo;
