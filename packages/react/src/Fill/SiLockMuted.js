import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLockMuted = ({ title, titleId, ...props }, ref) => {
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
        d="M12 2a5 5 0 0 0-5 5v3h-.4c-.88 0-1.6.72-1.6 1.6v7C5 19.92 6.08 21 7.4 21h9.2c1.32 0 2.4-1.08 2.4-2.4v-7c0-.88-.72-1.6-1.6-1.6H17V7a5 5 0 0 0-5-5m3 8V7c0-1.658-1.342-3-3-3S9 5.342 9 7v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiLockMuted.displayName = "SvgSiLockMuted";
const ForwardRef = forwardRef(SvgSiLockMuted);
const Memo = memo(ForwardRef);
export default Memo;
