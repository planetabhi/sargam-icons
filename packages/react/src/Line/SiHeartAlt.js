import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiHeartAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654-.86.854-6.852 6.852L5.19 13.9l-.86-.854-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654.655-.654a5.45 5.45 0 0 1 3.852-1.595"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiHeartAlt.displayName = "SvgSiHeartAlt";
const ForwardRef = forwardRef(SvgSiHeartAlt);
const Memo = memo(ForwardRef);
export default Memo;
