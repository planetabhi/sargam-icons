import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiEject = ({ title, titleId, ...props }, ref) => {
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
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m5 13 7-10 7 10zm0 4.8v2.4a.8.8 0 0 0 .8.8h12.4a.8.8 0 0 0 .8-.8v-2.4a.8.8 0 0 0-.8-.8H5.8a.8.8 0 0 0-.8.8Z"
      />
    </svg>
  );
};
SvgSiEject.displayName = "SvgSiEject";
const ForwardRef = forwardRef(SvgSiEject);
const Memo = memo(ForwardRef);
export default Memo;
