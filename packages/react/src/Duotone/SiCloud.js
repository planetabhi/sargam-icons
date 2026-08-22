import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCloud = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4 5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4 5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiCloud.displayName = "SvgSiCloud";
const ForwardRef = forwardRef(SvgSiCloud);
const Memo = memo(ForwardRef);
export default Memo;
