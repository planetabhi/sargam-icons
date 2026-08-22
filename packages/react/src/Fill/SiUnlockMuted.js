import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiUnlockMuted = ({ title, titleId, ...props }, ref) => {
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
        d="M18 2a5 5 0 0 0-5 5v3H4.6c-.88 0-1.6.72-1.6 1.6v7C3 19.92 4.08 21 5.4 21h9.2c1.32 0 2.4-1.08 2.4-2.4v-7c0-.88-.72-1.6-1.6-1.6H15V7c0-1.658 1.342-3 3-3s3 1.342 3 3v3a1 1 0 1 0 2 0V7a5 5 0 0 0-5-5"
      />
    </svg>
  );
};
SvgSiUnlockMuted.displayName = "SvgSiUnlockMuted";
const ForwardRef = forwardRef(SvgSiUnlockMuted);
const Memo = memo(ForwardRef);
export default Memo;
