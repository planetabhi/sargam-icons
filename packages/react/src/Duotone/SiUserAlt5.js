import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiUserAlt5 = ({ title, titleId, ...props }, ref) => {
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
        d="M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.4 22h-.02m0 0H3.6c-.88 0-1.6-.72-1.6-1.6v-3.65c0-.25 0-.38.12-.62.38-.88 1.5-1.62 3.25-2.25M20.38 22c.88 0 1.6-.72 1.6-1.6v-3.65c0-.24 0-.5-.12-.62-.37-.87-1.5-1.63-3.25-2.25M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"
      />
    </svg>
  );
};
SvgSiUserAlt5.displayName = "SvgSiUserAlt5";
const ForwardRef = forwardRef(SvgSiUserAlt5);
const Memo = memo(ForwardRef);
export default Memo;
