import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiBuildingAlt3 = ({ title, titleId, ...props }, ref) => {
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
        d="M19 1a1 1 0 1 1 0 2v2h4a1 1 0 1 1 0 2v12.6a3.4 3.4 0 0 1-3.4 3.4H4.3C2.343 23 1 21.348 1 19.553V7a1 1 0 0 1 0-2h4V3a1 1 0 0 1 0-2zm-8.2 17A1.8 1.8 0 0 0 9 19.8V22h2v-2h2v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zM3 19.553C3 20.408 3.606 21 4.3 21h1.002A3.4 3.4 0 0 1 5 19.6V7H3zm16 .047c0 .499-.108.973-.302 1.4h.902a1.4 1.4 0 0 0 1.4-1.4V7h-2zM10 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiBuildingAlt3.displayName = "SvgSiBuildingAlt3";
const ForwardRef = forwardRef(SvgSiBuildingAlt3);
const Memo = memo(ForwardRef);
export default Memo;
