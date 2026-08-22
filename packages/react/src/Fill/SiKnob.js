import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiKnob = ({ title, titleId, ...props }, ref) => {
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
        d="M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16m4.707 3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4m14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-7-3a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
      />
    </svg>
  );
};
SvgSiKnob.displayName = "SvgSiKnob";
const ForwardRef = forwardRef(SvgSiKnob);
const Memo = memo(ForwardRef);
export default Memo;
