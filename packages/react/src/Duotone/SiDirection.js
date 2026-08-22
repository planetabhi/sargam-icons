import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiDirection = ({ title, titleId, ...props }, ref) => {
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
        d="m12 3 7 18-7-4.093L5 21z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m12 3 7 18-7-4.093L5 21z"
      />
    </svg>
  );
};
SvgSiDirection.displayName = "SvgSiDirection";
const ForwardRef = forwardRef(SvgSiDirection);
const Memo = memo(ForwardRef);
export default Memo;
