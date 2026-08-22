import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiActions = ({ title, titleId, ...props }, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5 0L9 7.5v9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiActions.displayName = "SvgSiActions";
const ForwardRef = forwardRef(SvgSiActions);
const Memo = memo(ForwardRef);
export default Memo;
