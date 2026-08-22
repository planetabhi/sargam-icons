import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNorthWestCircle = ({ title, titleId, ...props }, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M9 13v-2.586l6.293 6.293a1 1 0 0 0 1.414-1.414L10.414 9H13a1 1 0 0 0 0-2H8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiNorthWestCircle.displayName = "SvgSiNorthWestCircle";
const ForwardRef = forwardRef(SvgSiNorthWestCircle);
const Memo = memo(ForwardRef);
export default Memo;
