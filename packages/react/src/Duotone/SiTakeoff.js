import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiTakeoff = ({ title, titleId, ...props }, ref) => {
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
        d="m18.212 6.271-3.668 2.241-6.947-.835a2.3 2.3 0 0 0-1.232.249l-1.113.649 5.262 2.16-4.746 2.811-1.404-.2a2.04 2.04 0 0 0-1.513.175L2 14l3.47 2.044 6.174-1.32L22 8.687 20.972 6.97c-.53-.923-1.77-1.255-2.76-.699q.06 0 0 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m18.212 6.271-3.668 2.241-6.947-.835a2.3 2.3 0 0 0-1.232.249l-1.113.649 5.262 2.16-4.746 2.811-1.404-.2a2.04 2.04 0 0 0-1.513.175L2 14l3.47 2.044 6.174-1.32L22 8.687 20.972 6.97c-.53-.923-1.77-1.255-2.76-.699m0 0q.06 0 0 0M6 19h12"
      />
    </svg>
  );
};
SvgSiTakeoff.displayName = "SvgSiTakeoff";
const ForwardRef = forwardRef(SvgSiTakeoff);
const Memo = memo(ForwardRef);
export default Memo;
