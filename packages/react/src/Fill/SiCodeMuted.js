import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCodeMuted = ({ title, titleId, ...props }, ref) => {
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
        d="M15.707 7.293a1 1 0 1 0-1.414 1.414L17.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414zm-6 1.414a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L6.414 12z"
      />
    </svg>
  );
};
SvgSiCodeMuted.displayName = "SvgSiCodeMuted";
const ForwardRef = forwardRef(SvgSiCodeMuted);
const Memo = memo(ForwardRef);
export default Memo;
