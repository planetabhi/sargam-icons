import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCrosshairDetailed = ({ title, titleId, ...props }, ref) => {
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
        d="M2 12h4m12 0h4M12 22v-4m0-12V2m8 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
    </svg>
  );
};
SvgSiCrosshairDetailed.displayName = "SvgSiCrosshairDetailed";
const ForwardRef = forwardRef(SvgSiCrosshairDetailed);
const Memo = memo(ForwardRef);
export default Memo;
