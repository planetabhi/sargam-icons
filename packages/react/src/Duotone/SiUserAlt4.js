import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiUserAlt4 = ({ title, titleId, ...props }, ref) => {
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
        fillOpacity={0.16}
        d="M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9m4-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
SvgSiUserAlt4.displayName = "SvgSiUserAlt4";
const ForwardRef = forwardRef(SvgSiUserAlt4);
const Memo = memo(ForwardRef);
export default Memo;
