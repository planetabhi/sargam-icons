import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiEmoji = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m4.933 11.147a1 1 0 0 0-1.287.587l-.079.21a3.81 3.81 0 0 1-3.277 2.461l-.29.012a3.81 3.81 0 0 1-3.568-2.473l-.078-.21a1 1 0 1 0-1.875.699l.08.212v.002A5.81 5.81 0 0 0 12 18.417l.22-.005a5.81 5.81 0 0 0 5.22-3.765l.001-.002.08-.212a1 1 0 0 0-.588-1.287M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiEmoji.displayName = "SvgSiEmoji";
const ForwardRef = forwardRef(SvgSiEmoji);
const Memo = memo(ForwardRef);
export default Memo;
