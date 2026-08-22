import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiStar = ({ title, titleId, ...props }, ref) => {
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
        d="M12.954 1.7a1 1 0 0 0-1.908-.001l-2.184 6.92-6.861-.005a1 1 0 0 0-.566 1.826l5.498 3.762-2.067 6.545A1 1 0 0 0 6.4 21.86l5.6-4.006 5.594 4.007a1 1 0 0 0 1.536-1.114l-2.067-6.545 5.502-3.762a1 1 0 0 0-.566-1.826l-6.866.005z"
      />
    </svg>
  );
};
SvgSiStar.displayName = "SvgSiStar";
const ForwardRef = forwardRef(SvgSiStar);
const Memo = memo(ForwardRef);
export default Memo;
