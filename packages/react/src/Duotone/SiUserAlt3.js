import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiUserAlt3 = ({ title, titleId, ...props }, ref) => {
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
      <circle cx={12} cy={7} r={4} fill="currentColor" fillOpacity={0.16} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M20 21v-4.6a2.4 2.4 0 0 0-2.4-2.4H6.4A2.4 2.4 0 0 0 4 16.4V21M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
SvgSiUserAlt3.displayName = "SvgSiUserAlt3";
const ForwardRef = forwardRef(SvgSiUserAlt3);
const Memo = memo(ForwardRef);
export default Memo;
