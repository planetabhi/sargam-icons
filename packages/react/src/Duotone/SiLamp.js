import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLamp = ({ title, titleId, ...props }, ref) => {
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
        d="M12 2c5.523 0 10 4.477 10 10v1H2v-1C2 6.477 6.477 2 12 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 13v6m10-7c0-5.523-4.477-10-10-10S2 6.477 2 12v1h20zM8.818 19h6.364c1 0 1.818.9 1.818 2v1H7v-1c0-1.1.818-2 1.818-2"
      />
    </svg>
  );
};
SvgSiLamp.displayName = "SvgSiLamp";
const ForwardRef = forwardRef(SvgSiLamp);
const Memo = memo(ForwardRef);
export default Memo;
