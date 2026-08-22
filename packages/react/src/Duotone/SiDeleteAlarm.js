import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiDeleteAlarm = ({ title, titleId, ...props }, ref) => {
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
        d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m9.172 15.828 5.656-5.656m0 5.656-5.656-5.656M18 3l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      />
    </svg>
  );
};
SvgSiDeleteAlarm.displayName = "SvgSiDeleteAlarm";
const ForwardRef = forwardRef(SvgSiDeleteAlarm);
const Memo = memo(ForwardRef);
export default Memo;
