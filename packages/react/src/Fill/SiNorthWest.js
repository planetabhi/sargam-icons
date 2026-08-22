import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNorthWest = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M9 10.414V13a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-2.586l6.293 6.293a1 1 0 1 1-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiNorthWest.displayName = "SvgSiNorthWest";
const ForwardRef = forwardRef(SvgSiNorthWest);
const Memo = memo(ForwardRef);
export default Memo;
