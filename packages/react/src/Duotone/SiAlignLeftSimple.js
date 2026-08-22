import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAlignLeftSimple = ({ title, titleId, ...props }, ref) => {
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
        d="M22 13.4v-2.8A1.6 1.6 0 0 0 20.4 9H7.6A1.6 1.6 0 0 0 6 10.6v2.8A1.6 1.6 0 0 0 7.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M2 2v20m20-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 13.4v-2.8A1.6 1.6 0 0 1 7.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6"
      />
    </svg>
  );
};
SvgSiAlignLeftSimple.displayName = "SvgSiAlignLeftSimple";
const ForwardRef = forwardRef(SvgSiAlignLeftSimple);
const Memo = memo(ForwardRef);
export default Memo;
