import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLightning = ({ title, titleId, ...props }, ref) => {
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
        d="m12.667 10.5 1.25-7.5L6 13h5l-1.25 7.5 7.917-10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiLightning.displayName = "SvgSiLightning";
const ForwardRef = forwardRef(SvgSiLightning);
const Memo = memo(ForwardRef);
export default Memo;
