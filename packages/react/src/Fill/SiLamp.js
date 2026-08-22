import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLamp = ({ title, titleId, ...props }, ref) => {
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
        d="M16 21c0-.64-.458-1-.818-1H8.818c-.36 0-.818.36-.818 1zm7-8a1 1 0 0 1-1 1h-9v4h2.182C16.822 18 18 19.44 18 21v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1c0-1.56 1.179-3 2.818-3H11v-4H2a1 1 0 0 1-1-1v-1C1 5.925 5.925 1 12 1s11 4.925 11 11z"
      />
    </svg>
  );
};
SvgSiLamp.displayName = "SvgSiLamp";
const ForwardRef = forwardRef(SvgSiLamp);
const Memo = memo(ForwardRef);
export default Memo;
