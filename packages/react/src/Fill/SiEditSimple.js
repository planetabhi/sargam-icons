import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiEditSimple = ({ title, titleId, ...props }, ref) => {
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
        d="M16.738 3.727a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838L8.818 18.718a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .137-.256z"
      />
    </svg>
  );
};
SvgSiEditSimple.displayName = "SvgSiEditSimple";
const ForwardRef = forwardRef(SvgSiEditSimple);
const Memo = memo(ForwardRef);
export default Memo;
