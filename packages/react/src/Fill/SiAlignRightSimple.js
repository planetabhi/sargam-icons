import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAlignRightSimple = ({ title, titleId, ...props }, ref) => {
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
        d="M22 2a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0zm-5 8.6v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 13.4v-2.8A1.6 1.6 0 0 1 3.6 9h11.8a1.6 1.6 0 0 1 1.6 1.6"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAlignRightSimple.displayName = "SvgSiAlignRightSimple";
const ForwardRef = forwardRef(SvgSiAlignRightSimple);
const Memo = memo(ForwardRef);
export default Memo;
