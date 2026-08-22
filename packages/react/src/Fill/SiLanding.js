import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLanding = ({ title, titleId, ...props }, ref) => {
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
        d="m8.488 4.316 1.27.22q.015.001.03.005c.451.107.844.3 1.192.597l.146.133.016.016 4.666 4.979 4.08.615.017.004c1.37.257 2.303 1.555 2.065 2.888l-.315 1.967a.5.5 0 0 1-.578.413l-11.814-2.03a.5.5 0 0 1-.15-.052l-5.577-2.958a.5.5 0 0 1-.238-.275L1.954 7.042a.5.5 0 0 1 .564-.658l.959.18.006.001a2.54 2.54 0 0 1 1.554 1.003l.82.916 4.28.705L7.96 5.042a.5.5 0 0 1 .528-.726M18 18a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z"
      />
    </svg>
  );
};
SvgSiLanding.displayName = "SvgSiLanding";
const ForwardRef = forwardRef(SvgSiLanding);
const Memo = memo(ForwardRef);
export default Memo;
