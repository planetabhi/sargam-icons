import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLockAlt = ({ title, titleId, ...props }, ref) => {
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
        fillOpacity={0.16}
        d="M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M8 11V7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6m8.4 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
};
SvgSiLockAlt.displayName = "SvgSiLockAlt";
const ForwardRef = forwardRef(SvgSiLockAlt);
const Memo = memo(ForwardRef);
export default Memo;
