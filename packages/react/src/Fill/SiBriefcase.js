import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiBriefcase = ({ title, titleId, ...props }, ref) => {
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
        d="M8 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7H16V4.8A1.8 1.8 0 0 0 14.2 3H9.8A1.8 1.8 0 0 0 8 4.8zm2 0V5h4v2zm0 1v12H8V8zm6 0v12h-2V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiBriefcase.displayName = "SvgSiBriefcase";
const ForwardRef = forwardRef(SvgSiBriefcase);
const Memo = memo(ForwardRef);
export default Memo;
