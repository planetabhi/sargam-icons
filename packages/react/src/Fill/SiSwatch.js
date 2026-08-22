import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSwatch = ({ title, titleId, ...props }, ref) => {
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
        d="M6 2a4 4 0 0 1 4 4v2.313l1.9-1.899a4 4 0 0 1 5.657 5.657L15.627 14H18a4 4 0 0 1 .206 7.995L18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m0 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m3.628 4H18a2 2 0 0 0 .204-3.99L18 16h-4.372zm6.515-12.172a2 2 0 0 0-2.83 0L10 11.142v5.657l2.5-2.501.01-.01 3.633-3.63a2 2 0 0 0 0-2.83"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSwatch.displayName = "SvgSiSwatch";
const ForwardRef = forwardRef(SvgSiSwatch);
const Memo = memo(ForwardRef);
export default Memo;
