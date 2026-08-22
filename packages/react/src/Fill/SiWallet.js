import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiWallet = ({ title, titleId, ...props }, ref) => {
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
        d="M19 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V16h.4a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 21.4 8H21V6.4A2.4 2.4 0 0 0 18.6 4m-2 6a.6.6 0 0 0-.6.6v2.8a.6.6 0 0 0 .6.6h4.8a.6.6 0 0 0 .6-.6v-2.8a.6.6 0 0 0-.6-.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiWallet.displayName = "SvgSiWallet";
const ForwardRef = forwardRef(SvgSiWallet);
const Memo = memo(ForwardRef);
export default Memo;
