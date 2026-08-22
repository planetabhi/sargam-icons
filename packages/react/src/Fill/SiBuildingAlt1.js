import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiBuildingAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M21 1a1 1 0 1 1 0 2v16.6a3.4 3.4 0 0 1-3.4 3.4H6.4A3.4 3.4 0 0 1 3 19.6V3a1 1 0 0 1 0-2zM9.8 18A1.8 1.8 0 0 0 8 19.8V22h2v-2h4v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zM8 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM8 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM8 5a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiBuildingAlt1.displayName = "SvgSiBuildingAlt1";
const ForwardRef = forwardRef(SvgSiBuildingAlt1);
const Memo = memo(ForwardRef);
export default Memo;
