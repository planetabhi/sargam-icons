import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiUserAlt2 = ({ title, titleId, ...props }, ref) => {
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
        d="M12.9 14c4.474 0 8.1 3.582 8.1 8H3c0-4.418 3.626-8 8.1-8zM12 1.25A4.75 4.75 0 0 1 16.75 6v1a4.75 4.75 0 1 1-9.5 0V6A4.75 4.75 0 0 1 12 1.25"
      />
    </svg>
  );
};
SvgSiUserAlt2.displayName = "SvgSiUserAlt2";
const ForwardRef = forwardRef(SvgSiUserAlt2);
const Memo = memo(ForwardRef);
export default Memo;
