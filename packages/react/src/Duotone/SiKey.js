import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiKey = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M15 3a6 6 0 1 1-2.001 11.658l-5.76 5.764a1.994 1.994 0 0 1-2.817 0L3 19l1.458-1.458 1.85-.184.227-1.893 1.895-.228.227-1.894 1.219-1.219A6 6 0 0 1 15 3m0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M15 15a6 6 0 1 0-5.124-2.876l-1.22 1.22-.226 1.893-1.894.227-.228 1.894-1.85.184L3 19l1.422 1.422a1.99 1.99 0 0 0 2.817 0l5.76-5.764c.626.222 1.3.342 2.001.342"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M15 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </svg>
  );
};
SvgSiKey.displayName = "SvgSiKey";
const ForwardRef = forwardRef(SvgSiKey);
const Memo = memo(ForwardRef);
export default Memo;
