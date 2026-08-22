import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiPentagon = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="m12 2 10 7.249L18.173 21H5.827L2 9.249z" />
    </svg>
  );
};
SvgSiPentagon.displayName = "SvgSiPentagon";
const ForwardRef = forwardRef(SvgSiPentagon);
const Memo = memo(ForwardRef);
export default Memo;
