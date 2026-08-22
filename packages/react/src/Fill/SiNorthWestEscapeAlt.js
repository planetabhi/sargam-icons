import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNorthWestEscapeAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8.414l6.293 6.293a1 1 0 1 1-1.414 1.414zM14 9a1 1 0 0 1 1-1h.6c1.882 0 3.4 1.518 3.4 3.4v4.2c0 1.882-1.518 3.4-3.4 3.4h-4.2A3.394 3.394 0 0 1 8 15.6V15a1 1 0 1 1 2 0v.6c0 .778.622 1.4 1.4 1.4h4.2c.778 0 1.4-.622 1.4-1.4v-4.2c0-.778-.622-1.4-1.4-1.4H15a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiNorthWestEscapeAlt.displayName = "SvgSiNorthWestEscapeAlt";
const ForwardRef = forwardRef(SvgSiNorthWestEscapeAlt);
const Memo = memo(ForwardRef);
export default Memo;
