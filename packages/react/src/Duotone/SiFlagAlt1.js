import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiFlagAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M19.8 4c.66 0 1.2.517 1.2 1.149v5.553C21 11.966 19.92 13 18.6 13H4.2c-.66 0-1.2-.517-1.2-1.149V6.298C3 5.034 4.08 4 5.4 4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M3 11.851C3 12.483 3.54 13 4.2 13h14.4c1.32 0 2.4-1.034 2.4-2.298V5.15C21 4.517 20.46 4 19.8 4H5.4C4.08 4 3 5.034 3 6.298zm0 0V20"
      />
    </svg>
  );
};
SvgSiFlagAlt1.displayName = "SvgSiFlagAlt1";
const ForwardRef = forwardRef(SvgSiFlagAlt1);
const Memo = memo(ForwardRef);
export default Memo;
