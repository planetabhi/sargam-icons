import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAlignBottomSimple = ({ title, titleId, ...props }, ref) => {
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
        d="M2 22a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2zm8.6-5h2.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6v11.8a1.6 1.6 0 0 0 1.6 1.6"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAlignBottomSimple.displayName = "SvgSiAlignBottomSimple";
const ForwardRef = forwardRef(SvgSiAlignBottomSimple);
const Memo = memo(ForwardRef);
export default Memo;
