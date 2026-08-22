import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCreditCardDetailed = ({ title, titleId, ...props }, ref) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M1 8h22M1 12h22m-3 3h-3M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"
      />
    </svg>
  );
};
SvgSiCreditCardDetailed.displayName = "SvgSiCreditCardDetailed";
const ForwardRef = forwardRef(SvgSiCreditCardDetailed);
const Memo = memo(ForwardRef);
export default Memo;
