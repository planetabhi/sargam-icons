import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMoreSquareVert = ({ title, titleId, ...props }, ref) => {
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
        d="M10 11.533c0-.846.687-1.533 1.533-1.533h.934c.846 0 1.533.687 1.533 1.533v.934c0 .846-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 12.467zm0 7c0-.847.687-1.533 1.533-1.533h.934c.846 0 1.533.686 1.533 1.533v.934c0 .847-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 19.467zm0-14C10 3.686 10.687 3 11.533 3h.934C13.313 3 14 3.687 14 4.533v.934C14 6.314 13.313 7 12.467 7h-.934A1.533 1.533 0 0 1 10 5.467z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMoreSquareVert.displayName = "SvgSiMoreSquareVert";
const ForwardRef = forwardRef(SvgSiMoreSquareVert);
const Memo = memo(ForwardRef);
export default Memo;
