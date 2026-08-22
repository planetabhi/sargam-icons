import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNope = ({ title, titleId, ...props }, ref) => {
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
        d="M12 1a10.96 10.96 0 0 1 7.65 3.099 1 1 0 0 1 .477.488A10.96 10.96 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M4.297 18.332l1.406 1.423L19.92 5.712l-1.405-1.424z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiNope.displayName = "SvgSiNope";
const ForwardRef = forwardRef(SvgSiNope);
const Memo = memo(ForwardRef);
export default Memo;
