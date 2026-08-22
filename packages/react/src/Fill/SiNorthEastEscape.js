import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNorthEastEscape = ({ title, titleId, ...props }, ref) => {
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
        d="M13 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L15.586 7H14a1 1 0 0 1-1-1M5 9.4C5 7.518 6.518 6 8.4 6H9a1 1 0 0 1 0 2h-.6C7.622 8 7 8.622 7 9.4v6.2c0 .778.622 1.4 1.4 1.4h6.2c.778 0 1.4-.622 1.4-1.4V15a1 1 0 1 1 2 0v.6c0 1.882-1.518 3.4-3.4 3.4H8.4A3.394 3.394 0 0 1 5 15.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiNorthEastEscape.displayName = "SvgSiNorthEastEscape";
const ForwardRef = forwardRef(SvgSiNorthEastEscape);
const Memo = memo(ForwardRef);
export default Memo;
