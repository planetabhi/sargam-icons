import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiPhone = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27m9.077-4.303.354-1.415c.1-.404.675-.404.776 0l.354 1.415a.4.4 0 0 0 .29.291l1.416.354c.404.1.404.675 0 .776l-1.415.354a.4.4 0 0 0-.291.29l-.354 1.416c-.1.404-.675.404-.776 0l-.354-1.415a.4.4 0 0 0-.29-.291l-1.416-.354c-.404-.1-.404-.675 0-.776l1.415-.354a.4.4 0 0 0 .291-.29"
      />
    </svg>
  );
};
SvgSiAiPhone.displayName = "SvgSiAiPhone";
const ForwardRef = forwardRef(SvgSiAiPhone);
const Memo = memo(ForwardRef);
export default Memo;
