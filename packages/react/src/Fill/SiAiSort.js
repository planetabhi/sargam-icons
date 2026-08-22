import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiSort = ({ title, titleId, ...props }, ref) => {
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
        d="M4.6 2A2.6 2.6 0 0 0 2 4.6v3.8A2.6 2.6 0 0 0 4.6 11h3.8A2.6 2.6 0 0 0 11 8.4V4.6A2.6 2.6 0 0 0 8.4 2zm11 0A2.6 2.6 0 0 0 13 4.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8A2.6 2.6 0 0 0 22 8.4V4.6A2.6 2.6 0 0 0 19.4 2zm-11 11A2.6 2.6 0 0 0 2 15.6v3.8A2.6 2.6 0 0 0 4.6 22h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8A2.6 2.6 0 0 0 8.4 13zm12.004 1.508c.298-.872 1.585-.843 1.818.086l.396 1.586 1.588.399c.96.24.96 1.603 0 1.843l-1.588.396-.396 1.588c-.24.96-1.603.96-1.843 0l-.399-1.588-1.586-.396c-.96-.24-.96-1.603 0-1.843l1.587-.398.398-1.587zm.896 2.515a.95.95 0 0 1-.477.477.95.95 0 0 1 .477.476.95.95 0 0 1 .476-.476.95.95 0 0 1-.476-.477"
      />
    </svg>
  );
};
SvgSiAiSort.displayName = "SvgSiAiSort";
const ForwardRef = forwardRef(SvgSiAiSort);
const Memo = memo(ForwardRef);
export default Memo;
