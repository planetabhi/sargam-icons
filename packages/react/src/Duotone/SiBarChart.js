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
        fillOpacity={0.16}
        d="M13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6V22h6V3.6A1.6 1.6 0 0 0 13.4 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M2 22h20M9 8.6A1.6 1.6 0 0 0 7.4 7H4.6A1.6 1.6 0 0 0 3 8.6V22m6 0V3.6A1.6 1.6 0 0 1 10.6 2h2.8A1.6 1.6 0 0 1 15 3.6V22m6 0v-8.4a1.6 1.6 0 0 0-1.6-1.6h-2.8a1.6 1.6 0 0 0-1.6 1.6"
      />
    </svg>
  );
};
SvgSiBarChart.displayName = "SvgSiBarChart";
const ForwardRef = forwardRef(SvgSiBarChart);
const Memo = memo(ForwardRef);
export default Memo;
