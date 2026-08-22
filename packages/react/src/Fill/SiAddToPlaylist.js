import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAddToPlaylist = ({ title, titleId, ...props }, ref) => {
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
        d="M3 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm17.707 3.707a1 1 0 0 0-1.414-1.414L17 15.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM4 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
SvgSiAddToPlaylist.displayName = "SvgSiAddToPlaylist";
const ForwardRef = forwardRef(SvgSiAddToPlaylist);
const Memo = memo(ForwardRef);
export default Memo;
