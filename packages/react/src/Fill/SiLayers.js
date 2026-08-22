import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLayers = ({ title, titleId, ...props }, ref) => {
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
        d="M20.515 15.126a1 1 0 1 1 .97 1.748l-9 5a1 1 0 0 1-.97 0l-9-5a1 1 0 1 1 .97-1.748L12 19.856zm0-4a1 1 0 1 1 .97 1.748l-9 5a1 1 0 0 1-.97 0l-9-5a1 1 0 1 1 .97-1.748L12 15.856zM11.63 2.07a1 1 0 0 1 .854.056l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.97 0l-9-5a1 1 0 0 1 0-1.748l9-5z"
      />
    </svg>
  );
};
SvgSiLayers.displayName = "SvgSiLayers";
const ForwardRef = forwardRef(SvgSiLayers);
const Memo = memo(ForwardRef);
export default Memo;
