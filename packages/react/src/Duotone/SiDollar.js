import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiDollar = ({ title, titleId, ...props }, ref) => {
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
        d="M8.133 19.053a6.4 6.4 0 0 0 3.805.93c2.006-.147 4.214-1.58 4.054-3.989-.125-1.867-1.103-2.936-3.995-3.994S8.132 9.872 8.008 8.006c-.16-2.409 2.048-3.842 4.054-3.99a6.4 6.4 0 0 1 3.805.931M12 22V2"
      />
    </svg>
  );
};
SvgSiDollar.displayName = "SvgSiDollar";
const ForwardRef = forwardRef(SvgSiDollar);
const Memo = memo(ForwardRef);
export default Memo;
