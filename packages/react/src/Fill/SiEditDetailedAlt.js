import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiEditDetailedAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M19.425 4.575a2.5 2.5 0 0 0-3.536 0l-1.06 1.061 3.535 3.536 1.06-1.061a2.5 2.5 0 0 0 0-3.536m-5.303 1.768 3.536 3.536-8.839 8.838a.5.5 0 0 1-.255.137l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.536a.5.5 0 0 1 .137-.255z"
      />
    </svg>
  );
};
SvgSiEditDetailedAlt.displayName = "SvgSiEditDetailedAlt";
const ForwardRef = forwardRef(SvgSiEditDetailedAlt);
const Memo = memo(ForwardRef);
export default Memo;
