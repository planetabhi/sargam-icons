import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiText = ({ title, titleId, ...props }, ref) => {
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
        d="M8 21h8m-4 0V3M4 7V3h16v4"
      />
    </svg>
  );
};
SvgSiText.displayName = "SvgSiText";
const ForwardRef = forwardRef(SvgSiText);
const Memo = memo(ForwardRef);
export default Memo;
