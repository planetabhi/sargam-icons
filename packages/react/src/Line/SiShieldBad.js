import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiShieldBad = ({ title, titleId, ...props }, ref) => {
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
        d="m9.172 13.828 5.656-5.656m0 5.656L9.172 8.172M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"
      />
    </svg>
  );
};
SvgSiShieldBad.displayName = "SvgSiShieldBad";
const ForwardRef = forwardRef(SvgSiShieldBad);
const Memo = memo(ForwardRef);
export default Memo;
