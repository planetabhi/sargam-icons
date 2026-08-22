import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiUpDown = ({ title, titleId, ...props }, ref) => {
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
        strokeWidth={1.5}
        d="M12 3v18m0-18L8 7m4-4 4 4m-4 14-4-4m4 4 4-4"
      />
    </svg>
  );
};
SvgSiUpDown.displayName = "SvgSiUpDown";
const ForwardRef = forwardRef(SvgSiUpDown);
const Memo = memo(ForwardRef);
export default Memo;
