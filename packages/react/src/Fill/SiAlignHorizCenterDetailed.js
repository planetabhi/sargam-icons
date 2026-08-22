import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAlignHorizCenterDetailed = ({ title, titleId, ...props }, ref) => {
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
        d="M12 1a1 1 0 0 1 1 1v3h6.4A1.6 1.6 0 0 1 21 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H13v4h2.4a1.6 1.6 0 0 1 1.6 1.6v1.8a1.6 1.6 0 0 1-1.6 1.6H13v3a1 1 0 1 1-2 0v-3H8.6A1.6 1.6 0 0 1 7 17.4v-1.8A1.6 1.6 0 0 1 8.6 14H11v-4H4.6A1.6 1.6 0 0 1 3 8.4V6.6A1.6 1.6 0 0 1 4.6 5H11V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAlignHorizCenterDetailed.displayName = "SvgSiAlignHorizCenterDetailed";
const ForwardRef = forwardRef(SvgSiAlignHorizCenterDetailed);
const Memo = memo(ForwardRef);
export default Memo;
