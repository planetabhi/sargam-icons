import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiKeypad = ({ title, titleId, ...props }, ref) => {
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
        d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m9-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m12 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-9 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m16-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
SvgSiKeypad.displayName = "SvgSiKeypad";
const ForwardRef = forwardRef(SvgSiKeypad);
const Memo = memo(ForwardRef);
export default Memo;
