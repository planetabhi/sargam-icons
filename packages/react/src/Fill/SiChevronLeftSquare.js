import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiChevronLeftSquare = ({ title, titleId, ...props }, ref) => {
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
        d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m8.807 5.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.914 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiChevronLeftSquare.displayName = "SvgSiChevronLeftSquare";
const ForwardRef = forwardRef(SvgSiChevronLeftSquare);
const Memo = memo(ForwardRef);
export default Memo;
