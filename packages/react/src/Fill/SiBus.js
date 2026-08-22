import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiBus = ({ title, titleId, ...props }, ref) => {
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
        d="M6.5 15a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m11 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.6 2A2.4 2.4 0 0 1 21 4.4v16a1.6 1.6 0 0 1-1.6 1.6h-.8a1.6 1.6 0 0 1-1.6-1.6V19H7v1.4A1.6 1.6 0 0 1 5.4 22h-.8A1.6 1.6 0 0 1 3 20.4v-16A2.4 2.4 0 0 1 5.4 2zM6.5 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.4 4a.4.4 0 0 0-.4.4V12h14V4.4a.4.4 0 0 0-.4-.4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiBus.displayName = "SvgSiBus";
const ForwardRef = forwardRef(SvgSiBus);
const Memo = memo(ForwardRef);
export default Memo;
