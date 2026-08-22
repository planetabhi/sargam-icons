import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNotificationsThick = ({ title, titleId, ...props }, ref) => {
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
        d="M3 18a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18zm9 4a4 4 0 0 1-3.874-3h7.748A4 4 0 0 1 12 22"
      />
    </svg>
  );
};
SvgSiNotificationsThick.displayName = "SvgSiNotificationsThick";
const ForwardRef = forwardRef(SvgSiNotificationsThick);
const Memo = memo(ForwardRef);
export default Memo;
