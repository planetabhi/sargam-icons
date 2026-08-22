import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiArchive = ({ title, titleId, ...props }, ref) => {
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
        d="M0 4.6A2.6 2.6 0 0 1 2.6 2h18.8A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8h-.486L20 18.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3.086 8H2.6A2.6 2.6 0 0 1 0 5.4zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6zM15 9H9V7H7v2.2A1.8 1.8 0 0 0 8.8 11h6.4A1.8 1.8 0 0 0 17 9.2V7h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiArchive.displayName = "SvgSiArchive";
const ForwardRef = forwardRef(SvgSiArchive);
const Memo = memo(ForwardRef);
export default Memo;
