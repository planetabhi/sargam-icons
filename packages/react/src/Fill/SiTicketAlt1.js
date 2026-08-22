import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiTicketAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M20.8 4A2.2 2.2 0 0 1 23 6.2V9a1 1 0 0 1-1 1 2 2 0 1 0 0 4 1 1 0 0 1 1 1v2.8a2.2 2.2 0 0 1-2.2 2.2H3.2A2.2 2.2 0 0 1 1 17.8V15a1 1 0 0 1 1-1 2 2 0 1 0 0-4 1 1 0 0 1-1-1V6.2A2.2 2.2 0 0 1 3.2 4zM8 5v14h2V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiTicketAlt1.displayName = "SvgSiTicketAlt1";
const ForwardRef = forwardRef(SvgSiTicketAlt1);
const Memo = memo(ForwardRef);
export default Memo;
