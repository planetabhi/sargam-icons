import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiInventory = ({ title, titleId, ...props }, ref) => {
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
        d="M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7m-.4-4h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3m9.012 8.552-.354 1.415a.4.4 0 0 1-.29.291l-1.416.354c-.404.1-.404.675 0 .776l1.415.354a.4.4 0 0 1 .291.29l.354 1.416c.1.404.675.404.776 0l.354-1.415a.4.4 0 0 1 .29-.291l1.416-.354c.404-.1.404-.675 0-.776l-1.415-.354a.4.4 0 0 1-.291-.29l-.354-1.416c-.1-.404-.675-.404-.776 0"
      />
    </svg>
  );
};
SvgSiAiInventory.displayName = "SvgSiAiInventory";
const ForwardRef = forwardRef(SvgSiAiInventory);
const Memo = memo(ForwardRef);
export default Memo;
