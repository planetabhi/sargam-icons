import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMovie = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="M10.054 3 8.387 8h5.892l1.667-5z" />
      <path
        fill="currentColor"
        d="M7.946 3 6.279 8H2v2h20V8h-5.613l1.667-5H20.6A2.4 2.4 0 0 1 23 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 18.6V5.4A2.4 2.4 0 0 1 3.4 3z"
      />
    </svg>
  );
};
SvgSiMovie.displayName = "SvgSiMovie";
const ForwardRef = forwardRef(SvgSiMovie);
const Memo = memo(ForwardRef);
export default Memo;
