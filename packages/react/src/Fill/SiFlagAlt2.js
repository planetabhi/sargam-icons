import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiFlagAlt2 = ({ title, titleId, ...props }, ref) => {
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
        d="M21 3a1 1 0 0 1 .707 1.707L17.414 9l4.293 4.293A1 1 0 0 1 20.985 15L9.2 14.825l2.706 5.75a1.001 1.001 0 0 1-1.81.85l-8-17A1 1 0 0 1 3 3z"
      />
    </svg>
  );
};
SvgSiFlagAlt2.displayName = "SvgSiFlagAlt2";
const ForwardRef = forwardRef(SvgSiFlagAlt2);
const Memo = memo(ForwardRef);
export default Memo;
