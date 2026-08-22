import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiArrowDownward = ({ title, titleId, ...props }, ref) => {
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
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m8 14 4 4m0 0 4-4m-4 4V6"
      />
    </svg>
  );
};
SvgSiArrowDownward.displayName = "SvgSiArrowDownward";
const ForwardRef = forwardRef(SvgSiArrowDownward);
const Memo = memo(ForwardRef);
export default Memo;
