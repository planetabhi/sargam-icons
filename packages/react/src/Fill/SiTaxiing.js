import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiTaxiing = ({ title, titleId, ...props }, ref) => {
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
        d="M10.5 17.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8.855 5.501c.468.028.892.158 1.288.403l.167.113.029.022 5.329 4.45 4.227-.249h.037c1.416.017 2.535 1.203 2.537 2.587l.031 2.166a.5.5 0 0 1-.5.507H9.999a.5.5 0 0 1-.161-.026L3.824 13.42a.5.5 0 0 1-.28-.236l-1.984-3.7a.5.5 0 0 1 .446-.736l.977.012h.006a2.5 2.5 0 0 1 1.738.78l.977.959h4.34L7.124 6.29a.501.501 0 0 1 .408-.785l1.29-.006z"
      />
    </svg>
  );
};
SvgSiTaxiing.displayName = "SvgSiTaxiing";
const ForwardRef = forwardRef(SvgSiTaxiing);
const Memo = memo(ForwardRef);
export default Memo;
