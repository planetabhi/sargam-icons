import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNotificationsAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748 3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18zm3.126 1a4.002 4.002 0 0 0 7.748 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiNotificationsAlt.displayName = "SvgSiNotificationsAlt";
const ForwardRef = forwardRef(SvgSiNotificationsAlt);
const Memo = memo(ForwardRef);
export default Memo;
