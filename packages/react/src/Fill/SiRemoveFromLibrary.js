import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiRemoveFromLibrary = ({ title, titleId, ...props }, ref) => {
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
        d="M19.6 2H8.4A2.4 2.4 0 0 0 6 4.4v11.2A2.4 2.4 0 0 0 8.4 18h11.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 19.6 2M10 9a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 3a1 1 0 0 1 1 1v11.6C4 18.028 5.972 20 8.4 20H20a1 1 0 1 1 0 2H8.4A6.403 6.403 0 0 1 2 15.6V4a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
SvgSiRemoveFromLibrary.displayName = "SvgSiRemoveFromLibrary";
const ForwardRef = forwardRef(SvgSiRemoveFromLibrary);
const Memo = memo(ForwardRef);
export default Memo;
