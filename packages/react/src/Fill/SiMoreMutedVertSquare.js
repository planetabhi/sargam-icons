import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMoreMutedVertSquare = ({ title, titleId, ...props }, ref) => {
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
        d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m6.55 4.05a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMoreMutedVertSquare.displayName = "SvgSiMoreMutedVertSquare";
const ForwardRef = forwardRef(SvgSiMoreMutedVertSquare);
const Memo = memo(ForwardRef);
export default Memo;
