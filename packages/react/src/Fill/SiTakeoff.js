import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiTakeoff = ({ title, titleId, ...props }, ref) => {
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
        d="M17.968 5.835c1.212-.681 2.755-.29 3.432.878l1.03 1.717a.5.5 0 0 1-.177.69l-10.355 6.036a.5.5 0 0 1-.148.057l-6.175 1.32a.5.5 0 0 1-.358-.058l-3.47-2.044a.5.5 0 0 1 .009-.866l.851-.48.005-.002a2.54 2.54 0 0 1 1.828-.232l1.225.174 3.73-2.209-4.332-1.779A.5.5 0 0 1 5 8.143l1.112-.649.028-.014a2.8 2.8 0 0 1 1.494-.302l.022.003 6.777.813 3.518-2.15zM18 18a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z"
      />
    </svg>
  );
};
SvgSiTakeoff.displayName = "SvgSiTakeoff";
const ForwardRef = forwardRef(SvgSiTakeoff);
const Memo = memo(ForwardRef);
export default Memo;
