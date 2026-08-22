import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiArrowDownwardSquare = ({ title, titleId, ...props }, ref) => {
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
        d="M5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21m5.893-4.293a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.586V8a1 1 0 1 0-2 0v5.586l-2.293-2.293a1 1 0 0 0-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiArrowDownwardSquare.displayName = "SvgSiArrowDownwardSquare";
const ForwardRef = forwardRef(SvgSiArrowDownwardSquare);
const Memo = memo(ForwardRef);
export default Memo;
