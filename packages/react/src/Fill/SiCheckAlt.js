import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCheckAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M19.47 4.118a1 1 0 0 1 .412 1.353l-8 15a1 1 0 0 1-1.59.236l-6-6a1 1 0 1 1 1.415-1.414l5.046 5.046 7.365-13.81a1 1 0 0 1 1.353-.411"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiCheckAlt.displayName = "SvgSiCheckAlt";
const ForwardRef = forwardRef(SvgSiCheckAlt);
const Memo = memo(ForwardRef);
export default Memo;
