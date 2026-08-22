import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMap = ({ title, titleId, ...props }, ref) => {
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
        d="M8.872 2.007c.149-.019.301-.003.444.044l5.705 1.902 6.705-1.915A1 1 0 0 1 23 3v16a1 1 0 0 1-.726.962l-7 2a1 1 0 0 1-.59-.014l-5.706-1.902-6.704 1.916A1 1 0 0 1 1 21V5a1 1 0 0 1 .726-.962l7-2zM14 5v16h2V5zM8 3v16h2V3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMap.displayName = "SvgSiMap";
const ForwardRef = forwardRef(SvgSiMap);
const Memo = memo(ForwardRef);
export default Memo;
