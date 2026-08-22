import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiUnlockAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v4h2.4c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6H15V7c0-1.658-1.342-3-3-3S9 5.342 9 7a1 1 0 0 1-2 0m3 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiUnlockAlt.displayName = "SvgSiUnlockAlt";
const ForwardRef = forwardRef(SvgSiUnlockAlt);
const Memo = memo(ForwardRef);
export default Memo;
