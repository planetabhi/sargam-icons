import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiEditAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M19.92 5.778 18.223 4.08a.8.8 0 0 0-1.132 0L5.636 15.536 4.93 19.07l3.535-.707L19.92 6.91a.8.8 0 0 0 0-1.131M4.43 4.284l.376-1.508c.05-.202.338-.202.388 0l.377 1.508a.2.2 0 0 0 .145.145l1.508.377c.202.05.202.338 0 .388l-1.508.377a.2.2 0 0 0-.145.145l-.377 1.508c-.05.202-.338.202-.388 0l-.377-1.508a.2.2 0 0 0-.145-.145l-1.508-.377c-.202-.05-.202-.338 0-.388l1.508-.377a.2.2 0 0 0 .145-.145M18.6 18.6 19 17l.4 1.6 1.6.4-1.6.4L19 21l-.4-1.6L17 19z"
      />
      <path
        fill="currentColor"
        fillOpacity={0.16}
        d="M19.92 5.777 18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536 4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132"
      />
    </svg>
  );
};
SvgSiAiEditAlt1.displayName = "SvgSiAiEditAlt1";
const ForwardRef = forwardRef(SvgSiAiEditAlt1);
const Memo = memo(ForwardRef);
export default Memo;
