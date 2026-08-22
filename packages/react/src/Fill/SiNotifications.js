import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNotifications = ({ title, titleId, ...props }, ref) => {
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
        d="M12 1.25a1.75 1.75 0 0 0-1.737 1.967A7 7 0 0 0 5 10v7H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-7a7 7 0 0 0-5.263-6.783q.012-.106.013-.217A1.75 1.75 0 0 0 12 1.25M12 23a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3"
      />
    </svg>
  );
};
SvgSiNotifications.displayName = "SvgSiNotifications";
const ForwardRef = forwardRef(SvgSiNotifications);
const Memo = memo(ForwardRef);
export default Memo;
