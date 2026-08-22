import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiQuote = ({ title, titleId, ...props }, ref) => {
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
        d="M6.938 4.501c2-.053 4.172 1.435 4.523 4.6l.027.313.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302-1.19-.21-2.045-.703-2.618-1.36-.667-.766-.905-1.7-.905-2.517 0-2.214 1.703-4.005 3.86-3.965m10 0c2-.053 4.172 1.435 4.523 4.6l.027.313.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302-1.19-.21-2.045-.703-2.618-1.36-.667-.766-.905-1.7-.905-2.517 0-2.214 1.704-4.005 3.86-3.965"
      />
    </svg>
  );
};
SvgSiQuote.displayName = "SvgSiQuote";
const ForwardRef = forwardRef(SvgSiQuote);
const Memo = memo(ForwardRef);
export default Memo;
