import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMoreVert = ({ title, titleId, ...props }, ref) => {
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
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};
SvgSiMoreVert.displayName = "SvgSiMoreVert";
const ForwardRef = forwardRef(SvgSiMoreVert);
const Memo = memo(ForwardRef);
export default Memo;
