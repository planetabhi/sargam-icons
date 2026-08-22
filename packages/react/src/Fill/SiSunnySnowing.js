import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiSunnySnowing = ({ title, titleId, ...props }, ref) => {
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
        d="M12 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M1 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm17 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M4.929 4.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414zm15.556 1.414a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414zM4 15a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m5-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1m-7 2a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm4-3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-8 0a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0-5c0-2.21 1.79-4 4-4s4 1.79 4 4"
      />
    </svg>
  );
};
SvgSiSunnySnowing.displayName = "SvgSiSunnySnowing";
const ForwardRef = forwardRef(SvgSiSunnySnowing);
const Memo = memo(ForwardRef);
export default Memo;
