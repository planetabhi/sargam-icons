import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiArchive = ({ title, titleId, ...props }, ref) => {
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
        d="m21 7-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7m13 0v2.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V7M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3"
      />
    </svg>
  );
};
SvgSiArchive.displayName = "SvgSiArchive";
const ForwardRef = forwardRef(SvgSiArchive);
const Memo = memo(ForwardRef);
export default Memo;
