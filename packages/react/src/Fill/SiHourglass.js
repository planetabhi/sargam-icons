import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiHourglass = ({ title, titleId, ...props }, ref) => {
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
        d="M19 1a1 1 0 1 1 0 2h-1v2.734c0 1.825-.814 3.56-2.254 4.667l-.003.003L13.65 12l2.094 1.596.003.003c1.317 1.012 2.107 2.549 2.234 4.2q.03.143.015.296.004.085.005.17V21h1a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1v-2.734q.001-.086.005-.171-.014-.152.016-.296c.126-1.651.916-3.188 2.233-4.2l.003-.003L10.35 12l-2.093-1.596-.003-.003C6.814 9.294 6 7.56 6 5.734V3H5a1 1 0 0 1 0-2zm-6.804 15.02a1 1 0 0 0-.392 0l-5 1 .392 1.96L12 18.02l4.804.96.392-1.96z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiHourglass.displayName = "SvgSiHourglass";
const ForwardRef = forwardRef(SvgSiHourglass);
const Memo = memo(ForwardRef);
export default Memo;
