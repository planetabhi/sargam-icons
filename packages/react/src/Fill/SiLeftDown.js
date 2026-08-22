import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLeftDown = ({ title, titleId, ...props }, ref) => {
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
        d="M10 9.4A3.4 3.4 0 0 1 13.4 6H19a1 1 0 1 0 0-2h-5.6A5.4 5.4 0 0 0 8 9.4v7.186l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L10 16.586z"
      />
    </svg>
  );
};
SvgSiLeftDown.displayName = "SvgSiLeftDown";
const ForwardRef = forwardRef(SvgSiLeftDown);
const Memo = memo(ForwardRef);
export default Memo;
