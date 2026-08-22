import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiShield = ({ title, titleId, ...props }, ref) => {
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
        d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
      />
      <path
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
      />
    </svg>
  );
};
SvgSiShield.displayName = "SvgSiShield";
const ForwardRef = forwardRef(SvgSiShield);
const Memo = memo(ForwardRef);
export default Memo;
