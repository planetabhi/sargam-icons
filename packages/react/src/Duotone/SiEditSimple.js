import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiEditSimple = ({ title, titleId, ...props }, ref) => {
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
        d="M19.92 5.777 18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536 4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M19.92 5.777 18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536 4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132Z"
      />
    </svg>
  );
};
SvgSiEditSimple.displayName = "SvgSiEditSimple";
const ForwardRef = forwardRef(SvgSiEditSimple);
const Memo = memo(ForwardRef);
export default Memo;
