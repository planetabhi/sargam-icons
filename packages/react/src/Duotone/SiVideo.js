import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiVideo = ({ title, titleId, ...props }, ref) => {
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
        d="M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6ZM23 6l-6 6 6 6z"
      />
    </svg>
  );
};
SvgSiVideo.displayName = "SvgSiVideo";
const ForwardRef = forwardRef(SvgSiVideo);
const Memo = memo(ForwardRef);
export default Memo;
