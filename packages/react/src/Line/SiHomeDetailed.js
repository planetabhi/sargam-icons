import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiHomeDetailed = ({ title, titleId, ...props }, ref) => {
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
        d="m1 9 10.26-6.76a1.2 1.2 0 0 1 1.44 0L23 9m-2-1.313V19.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 22 3 20.93 3 19.6V7.682M18 3v2.718M15 8H9m.8 4h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8"
      />
    </svg>
  );
};
SvgSiHomeDetailed.displayName = "SvgSiHomeDetailed";
const ForwardRef = forwardRef(SvgSiHomeDetailed);
const Memo = memo(ForwardRef);
export default Memo;
