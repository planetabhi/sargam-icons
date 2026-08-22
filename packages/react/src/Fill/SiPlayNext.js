import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiPlayNext = ({ title, titleId, ...props }, ref) => {
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
        d="M2.538 4.113a1 1 0 0 1 1.035.068l10 7a1 1 0 0 1 0 1.638l-10 7A1 1 0 0 1 2 19V5a1 1 0 0 1 .538-.887M16 5.8A1.8 1.8 0 0 1 17.8 4h1.4A1.8 1.8 0 0 1 21 5.8v12.4a1.8 1.8 0 0 1-1.8 1.8h-1.4a1.8 1.8 0 0 1-1.8-1.8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiPlayNext.displayName = "SvgSiPlayNext";
const ForwardRef = forwardRef(SvgSiPlayNext);
const Memo = memo(ForwardRef);
export default Memo;
