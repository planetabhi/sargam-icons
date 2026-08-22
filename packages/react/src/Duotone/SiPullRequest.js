import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiPullRequest = ({ title, titleId, ...props }, ref) => {
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
        d="M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M18 16v-5.6A4.4 4.4 0 0 0 13.6 6H11m7 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M11 6l2-2m-2 2 2 2m-7 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </svg>
  );
};
SvgSiPullRequest.displayName = "SvgSiPullRequest";
const ForwardRef = forwardRef(SvgSiPullRequest);
const Memo = memo(ForwardRef);
export default Memo;
