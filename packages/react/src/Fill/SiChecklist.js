import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiChecklist = ({ title, titleId, ...props }, ref) => {
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
        d="M8.707 6.707a1 1 0 0 0-1.414-1.414L4 8.586 2.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM12 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-3.293 6.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L4 16.586l3.293-3.293a1 1 0 0 1 1.414 0M12 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
SvgSiChecklist.displayName = "SvgSiChecklist";
const ForwardRef = forwardRef(SvgSiChecklist);
const Memo = memo(ForwardRef);
export default Memo;
