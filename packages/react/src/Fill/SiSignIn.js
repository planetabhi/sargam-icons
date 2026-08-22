import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSignIn = ({ title, titleId, ...props }, ref) => {
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
        d="M11 5.4A1.4 1.4 0 0 1 12.4 4h6.2A1.4 1.4 0 0 1 20 5.4v13.2a1.4 1.4 0 0 1-1.4 1.4h-6.2a1.4 1.4 0 0 1-1.4-1.4V16a1 1 0 1 0-2 0v2.6a3.4 3.4 0 0 0 3.4 3.4h6.2a3.4 3.4 0 0 0 3.4-3.4V5.4A3.4 3.4 0 0 0 18.6 2h-6.2A3.4 3.4 0 0 0 9 5.4V8a1 1 0 1 0 2 0z"
      />
      <path
        fill="currentColor"
        d="M13.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L14.586 13H3a1 1 0 1 1 0-2h11.586l-1.293-1.293a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
};
SvgSiSignIn.displayName = "SvgSiSignIn";
const ForwardRef = forwardRef(SvgSiSignIn);
const Memo = memo(ForwardRef);
export default Memo;
