import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMonitorPlay = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-9.328 4.1A1 1 0 0 0 9 8v5a1 1 0 0 0 1.447.895l5-2.5a1 1 0 0 0 0-1.79z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMonitorPlay.displayName = "SvgSiMonitorPlay";
const ForwardRef = forwardRef(SvgSiMonitorPlay);
const Memo = memo(ForwardRef);
export default Memo;
