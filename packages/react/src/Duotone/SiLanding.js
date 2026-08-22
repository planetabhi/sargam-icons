import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLanding = ({ title, titleId, ...props }, ref) => {
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
        fillOpacity={0.16}
        d="m19.813 11.376-4.25-.641-4.786-5.106a2.3 2.3 0 0 0-1.104-.601l-1.27-.218 2.643 5.037-5.443-.897-.947-1.057a2.04 2.04 0 0 0-1.271-.837l-.96-.18L3.77 10.67l5.578 2.958 11.813 2.032.317-1.976c.186-1.048-.55-2.1-1.665-2.31q.045.039 0 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m19.813 11.376-4.25-.641-4.786-5.106a2.3 2.3 0 0 0-1.104-.601l-1.27-.218 2.643 5.037-5.443-.897-.947-1.057a2.04 2.04 0 0 0-1.271-.837l-.96-.18L3.77 10.67l5.578 2.958 11.813 2.032.317-1.976c.186-1.048-.55-2.1-1.665-2.31m0 0q.045.037 0 0M6 19h12"
      />
    </svg>
  );
};
SvgSiLanding.displayName = "SvgSiLanding";
const ForwardRef = forwardRef(SvgSiLanding);
const Memo = memo(ForwardRef);
export default Memo;
