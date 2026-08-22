import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiEye = ({ title, titleId, ...props }, ref) => {
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
        d="M22 12s-4.478 6-10 6-10-6-10-6 4.478-6 10-6 10 6 10 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
    </svg>
  );
};
SvgSiEye.displayName = "SvgSiEye";
const ForwardRef = forwardRef(SvgSiEye);
const Memo = memo(ForwardRef);
export default Memo;
