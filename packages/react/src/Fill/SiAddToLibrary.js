import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAddToLibrary = ({ title, titleId, ...props }, ref) => {
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
        d="M8.4 2h11.2A2.4 2.4 0 0 1 22 4.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 15.6V4.4A2.4 2.4 0 0 1 8.4 2M14 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"
      />
    </svg>
  );
};
SvgSiAddToLibrary.displayName = "SvgSiAddToLibrary";
const ForwardRef = forwardRef(SvgSiAddToLibrary);
const Memo = memo(ForwardRef);
export default Memo;
