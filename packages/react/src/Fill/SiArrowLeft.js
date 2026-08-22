import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiArrowLeft = ({ title, titleId, ...props }, ref) => {
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
        d="M10.707 8.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L8.414 13H18a1 1 0 1 0 0-2H8.414z"
      />
    </svg>
  );
};
SvgSiArrowLeft.displayName = "SvgSiArrowLeft";
const ForwardRef = forwardRef(SvgSiArrowLeft);
const Memo = memo(ForwardRef);
export default Memo;
