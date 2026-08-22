import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiChevronRightAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M7.293 3.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L14.586 12 7.293 4.707a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiChevronRightAlt.displayName = "SvgSiChevronRightAlt";
const ForwardRef = forwardRef(SvgSiChevronRightAlt);
const Memo = memo(ForwardRef);
export default Memo;
