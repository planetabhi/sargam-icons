import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiClearDay = ({ title, titleId, ...props }, ref) => {
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
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 4V2m0 20v-2m-8-8H2m20 0h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41m0 11.32 1.41 1.41M4.93 4.93l1.41 1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );
};
SvgSiClearDay.displayName = "SvgSiClearDay";
const ForwardRef = forwardRef(SvgSiClearDay);
const Memo = memo(ForwardRef);
export default Memo;
