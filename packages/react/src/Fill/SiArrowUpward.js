import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiArrowUpward = ({ title, titleId, ...props }, ref) => {
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
        d="M12.707 5.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 8.414V18a1 1 0 1 0 2 0V8.414l2.293 2.293a1 1 0 0 0 1.414-1.414z"
      />
    </svg>
  );
};
SvgSiArrowUpward.displayName = "SvgSiArrowUpward";
const ForwardRef = forwardRef(SvgSiArrowUpward);
const Memo = memo(ForwardRef);
export default Memo;
