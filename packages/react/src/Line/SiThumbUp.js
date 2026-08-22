import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiThumbUp = ({ title, titleId, ...props }, ref) => {
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
        d="M6 9.826h2.665L13.798 2c2.136 1.049 2.32 3.209 1.36 4.938l-.64 1.174c-.476.978-.034 1.734 1.001 1.714h3.237c.628 0 3.408.192 3.236 4.304-.156 3.577-3.126 5.87-3.72 5.87H6.066M2.8 8h2.4a.8.8 0 0 1 .8.8v12.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V8.8a.8.8 0 0 1 .8-.8"
      />
    </svg>
  );
};
SvgSiThumbUp.displayName = "SvgSiThumbUp";
const ForwardRef = forwardRef(SvgSiThumbUp);
const Memo = memo(ForwardRef);
export default Memo;
