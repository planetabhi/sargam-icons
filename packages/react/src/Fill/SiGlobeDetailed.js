import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiGlobeDetailed = ({ title, titleId, ...props }, ref) => {
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
        d="M14.973 11a15 15 0 0 0-.323-2.321C13.802 8.889 12.914 9 12 9c-.907 0-1.787-.11-2.629-.316A15 15 0 0 0 9.033 11zm-5.94 2q.08 1.186.336 2.317A11 11 0 0 1 12 15c.9 0 1.773.108 2.609.312q.264-1.131.351-2.312zm4.992 4.229A9 9 0 0 0 12 17c-.709 0-1.398.082-2.059.236.5 1.34 1.185 2.589 2.025 3.716a15 15 0 0 0 2.059-3.723"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M12 3c-.927 0-1.822.14-2.664.4A17 17 0 0 0 8.06 6.093a9 9 0 0 1-1.716-1.094 9 9 0 0 0-1.411 1.428A11 11 0 0 0 7.47 8.026c-.23.966-.38 1.96-.44 2.974H3.055a9 9 0 0 0 0 2h3.974q.091 1.528.44 2.974a11 11 0 0 0-2.537 1.598A9 9 0 0 0 6.342 19a9 9 0 0 1 1.715-1.093c.348.94.777 1.84 1.278 2.692A9 9 0 0 0 12 21a9 9 0 0 0 2.599-.38 17 17 0 0 0 1.313-2.727 9 9 0 0 1 1.744 1.108 9 9 0 0 0 1.411-1.428c-.77-.646-1.63-1.19-2.558-1.608.237-.962.391-1.954.456-2.965h3.98a9 9 0 0 0 0-2h-3.969a17 17 0 0 0-.425-2.983c.913-.415 1.76-.952 2.518-1.589A9 9 0 0 0 17.657 5a9 9 0 0 1-1.685 1.08 17 17 0 0 0-1.243-2.659 9 9 0 0 0-2.664-.42 15 15 0 0 1 2.025 3.756 9 9 0 0 1-4.146.007A15 15 0 0 1 12.003 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiGlobeDetailed.displayName = "SvgSiGlobeDetailed";
const ForwardRef = forwardRef(SvgSiGlobeDetailed);
const Memo = memo(ForwardRef);
export default Memo;
