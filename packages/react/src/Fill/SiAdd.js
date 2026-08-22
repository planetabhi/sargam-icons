import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAdd = ({ title, titleId, ...props }, ref) => {
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
        d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"
      />
    </svg>
  );
};
SvgSiAdd.displayName = "SvgSiAdd";
const ForwardRef = forwardRef(SvgSiAdd);
const Memo = memo(ForwardRef);
export default Memo;
