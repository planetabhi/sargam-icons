import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiRightTwoHeaded = ({ title, titleId, ...props }, ref) => {
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
        d="M15.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L17.586 13h-2.172l-3.707 3.707a1 1 0 1 1-1.414-1.414L12.586 13H4a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 1 1 1.414-1.414L15.414 11h2.172l-2.293-2.293a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
};
SvgSiRightTwoHeaded.displayName = "SvgSiRightTwoHeaded";
const ForwardRef = forwardRef(SvgSiRightTwoHeaded);
const Memo = memo(ForwardRef);
export default Memo;
