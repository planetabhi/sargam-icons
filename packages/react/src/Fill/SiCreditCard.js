import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCreditCard = ({ title, titleId, ...props }, ref) => {
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
        d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M22 9H2v2h20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiCreditCard.displayName = "SvgSiCreditCard";
const ForwardRef = forwardRef(SvgSiCreditCard);
const Memo = memo(ForwardRef);
export default Memo;
