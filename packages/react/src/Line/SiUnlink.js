import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiUnlink = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m12 7.729 2.711-2.715a3.028 3.028 0 0 1 5.168 2.14 3 3 0 0 1-.904 2.131L16.267 12M12 16.238 9.251 18.99a3 3 0 0 1-4.252 0 3 3 0 0 1 .022-4.237L7.766 12m8.674 4.44 2.122 2.122M5.438 5.379 7.56 7.5m10.253 6.75H21M14.25 18v3M9.75 6.188V3M6.188 9.75H3"
      />
    </svg>
  );
};
SvgSiUnlink.displayName = "SvgSiUnlink";
const ForwardRef = forwardRef(SvgSiUnlink);
const Memo = memo(ForwardRef);
export default Memo;
