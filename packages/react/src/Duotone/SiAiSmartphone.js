import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiSmartphone = ({ title, titleId, ...props }, ref) => {
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
        d="M15.6 2H8.4A2.4 2.4 0 0 0 6 4.4v15.2A2.4 2.4 0 0 0 8.4 22h7.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 15.6 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M11 5h2M8.4 2h7.2A2.4 2.4 0 0 1 18 4.4v15.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 19.6V4.4A2.4 2.4 0 0 1 8.4 2m3.406 8.776-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
      />
    </svg>
  );
};
SvgSiAiSmartphone.displayName = "SvgSiAiSmartphone";
const ForwardRef = forwardRef(SvgSiAiSmartphone);
const Memo = memo(ForwardRef);
export default Memo;
