import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiBarn = ({ title, titleId, ...props }, ref) => {
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
        d="M10.69 3.418a2.2 2.2 0 0 1 2.58 0l10.279 6.746a1 1 0 0 1-1.098 1.672L21 10.884v7.704A2.4 2.4 0 0 1 18.6 21H5.4A2.4 2.4 0 0 1 3 18.588V10.88l-1.45.955a1 1 0 0 1-1.1-1.67zM7.95 20h8.1L12 18.312zM6 19.188l4.05-1.688L6 15.812zm7.95-1.688L18 19.188v-3.376zM12 16.688 16.05 15h-8.1zM11 11a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiBarn.displayName = "SvgSiBarn";
const ForwardRef = forwardRef(SvgSiBarn);
const Memo = memo(ForwardRef);
export default Memo;
