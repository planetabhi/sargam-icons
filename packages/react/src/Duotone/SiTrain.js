import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiTrain = ({ title, titleId, ...props }, ref) => {
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
        d="M18.6 19a2.4 2.4 0 0 0 2.4-2.4V11H3v5.6A2.4 2.4 0 0 0 5.4 19z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M8 22h8M3 11h18M5.4 2h13.2A2.4 2.4 0 0 1 21 4.4v12.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 16.6V4.4A2.4 2.4 0 0 1 5.4 2M8 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
};
SvgSiTrain.displayName = "SvgSiTrain";
const ForwardRef = forwardRef(SvgSiTrain);
const Memo = memo(ForwardRef);
export default Memo;
