import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSignOutAlt = ({ title, titleId, ...props }, ref) => {
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
        d="m17 16 4-4m0 0-4-4m4 4H7m4 9H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3H11"
      />
    </svg>
  );
};
SvgSiSignOutAlt.displayName = "SvgSiSignOutAlt";
const ForwardRef = forwardRef(SvgSiSignOutAlt);
const Memo = memo(ForwardRef);
export default Memo;
