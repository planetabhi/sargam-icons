import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiExpandMoreAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiExpandMoreAlt.displayName = "SvgSiExpandMoreAlt";
const ForwardRef = forwardRef(SvgSiExpandMoreAlt);
const Memo = memo(ForwardRef);
export default Memo;
