import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiGridView = ({ title, titleId, ...props }, ref) => {
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
        d="M5.6 3A2.6 2.6 0 0 0 3 5.6v2.8A2.6 2.6 0 0 0 5.6 11h2.8A2.6 2.6 0 0 0 11 8.4V5.6A2.6 2.6 0 0 0 8.4 3zm0 10A2.6 2.6 0 0 0 3 15.6v2.8A2.6 2.6 0 0 0 5.6 21h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 8.4 13zm10-10A2.6 2.6 0 0 0 13 5.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8A2.6 2.6 0 0 0 21 8.4V5.6A2.6 2.6 0 0 0 18.4 3zm0 10a2.6 2.6 0 0 0-2.6 2.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8a2.6 2.6 0 0 0-2.6-2.6z"
      />
    </svg>
  );
};
SvgSiGridView.displayName = "SvgSiGridView";
const ForwardRef = forwardRef(SvgSiGridView);
const Memo = memo(ForwardRef);
export default Memo;
