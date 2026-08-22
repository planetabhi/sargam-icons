import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiZoomOut = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M11 19a7.97 7.97 0 0 0 4.906-1.68l4.387 4.387a1 1 0 0 0 1.414-1.414l-4.387-4.387A8 8 0 1 0 11 19m-3-9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiZoomOut.displayName = "SvgSiZoomOut";
const ForwardRef = forwardRef(SvgSiZoomOut);
const Memo = memo(ForwardRef);
export default Memo;
