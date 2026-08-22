import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiHammerAlt = ({ title, titleId, ...props }, ref) => {
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
        d="m13.707 11.607-8.061 9.475a1.6 1.6 0 0 1-2.263 0l-.565-.566a1.6 1.6 0 0 1 0-2.262l9.475-8.062-2.121-2.12 3.535-3.536 5.657 5.656-3.536 3.536z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m18.657 6.657-1.414-1.414m-3.536 6.364-8.06 9.475a1.6 1.6 0 0 1-2.264 0l-.565-.566a1.6 1.6 0 0 1 0-2.262l9.475-8.062m3.536 3.536 3.535-3.536m-9.192-2.12 3.535-3.536m-5.09.848L11.02 2.98a.8.8 0 0 1 1.132 0l8.768 8.768a.8.8 0 0 1 0 1.131l-2.404 2.405a.8.8 0 0 1-1.132 0L8.616 6.515a.8.8 0 0 1 0-1.13"
      />
    </svg>
  );
};
SvgSiHammerAlt.displayName = "SvgSiHammerAlt";
const ForwardRef = forwardRef(SvgSiHammerAlt);
const Memo = memo(ForwardRef);
export default Memo;
