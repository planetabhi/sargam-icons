import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiBluetooth = ({ title, titleId, ...props }, ref) => {
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
        d="m5 6 13 11-6 5V2l6 5L5 18"
      />
    </svg>
  );
};
SvgSiBluetooth.displayName = "SvgSiBluetooth";
const ForwardRef = forwardRef(SvgSiBluetooth);
const Memo = memo(ForwardRef);
export default Memo;
