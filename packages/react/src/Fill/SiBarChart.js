import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiBarChart = ({ title, titleId, ...props }, ref) => {
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
        d="M13.4 2A1.6 1.6 0 0 1 15 3.6V21h1v-7.4a1.6 1.6 0 0 1 1.6-1.6h2.8a1.6 1.6 0 0 1 1.6 1.6V21a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2V8.6A1.6 1.6 0 0 1 3.6 7h2.8A1.6 1.6 0 0 1 8 8.6V21h1V3.6A1.6 1.6 0 0 1 10.6 2z"
      />
    </svg>
  );
};
SvgSiBarChart.displayName = "SvgSiBarChart";
const ForwardRef = forwardRef(SvgSiBarChart);
const Memo = memo(ForwardRef);
export default Memo;
