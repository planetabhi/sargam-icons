import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSpark = ({ title, titleId, ...props }, ref) => {
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
        d="M10.995 21.005v-6.588L6.34 19.072a1 1 0 1 1-1.414-1.414L9.584 13H3a1 1 0 1 1 0-2h6.574L4.926 6.352A1 1 0 1 1 6.34 4.937l4.655 4.656V3.005a1 1 0 1 1 2 0v6.584l4.658-4.658a1 1 0 1 1 1.414 1.414L14.412 11H21a1 1 0 1 1 0 2h-6.598l4.665 4.665a1 1 0 0 1-1.414 1.414l-4.658-4.658v6.584a1 1 0 0 1-2 0"
      />
    </svg>
  );
};
SvgSiSpark.displayName = "SvgSiSpark";
const ForwardRef = forwardRef(SvgSiSpark);
const Memo = memo(ForwardRef);
export default Memo;
