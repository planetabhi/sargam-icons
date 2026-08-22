import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSwatch = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M6 18h-.008M6 21h12a3 3 0 1 0 0-6h-4.787M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 6 0v12c0 .7-.24 1.346-.643 1.856M6 21c.956 0 1.808-.447 2.357-1.144M9 10.728l3.607-3.607a3 3 0 1 1 4.242 4.243l-8.492 8.492"
      />
    </svg>
  );
};
SvgSiSwatch.displayName = "SvgSiSwatch";
const ForwardRef = forwardRef(SvgSiSwatch);
const Memo = memo(ForwardRef);
export default Memo;
