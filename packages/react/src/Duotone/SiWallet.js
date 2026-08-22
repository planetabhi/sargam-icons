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
        fillOpacity={0.16}
        d="M18.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V15h-4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4V6.4A2.4 2.4 0 0 0 18.6 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 9V6.4c0-1.325-.88-2.4-1.964-2.4H2.964C1.879 4 1 5.075 1 6.4v11.2c0 1.325.88 2.4 1.964 2.4h16.072C20.121 20 21 18.925 21 17.6V15m-1-3h.01M16.6 9h4.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-2.8A1.6 1.6 0 0 1 16.6 9"
      />
    </svg>
  );
};
SvgSiWallet.displayName = "SvgSiWallet";
const ForwardRef = forwardRef(SvgSiWallet);
const Memo = memo(ForwardRef);
export default Memo;
