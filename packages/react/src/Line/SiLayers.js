import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLayers = ({ title, titleId, ...props }, ref) => {
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
        d="m3 12 9 5 9-5M3 16l9 5 9-5M3 8l9-5 9 5-9 5z"
      />
    </svg>
  );
};
SvgSiLayers.displayName = "SvgSiLayers";
const ForwardRef = forwardRef(SvgSiLayers);
const Memo = memo(ForwardRef);
export default Memo;
