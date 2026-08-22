import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiWidgetAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M6.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m13.7-7h-5.4a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h5.4a.8.8 0 0 0 .8-.8v-5.4a.8.8 0 0 0-.8-.8M2.5 10l4-7 4 7z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M19.275 3.5c-.795 0-1.481.466-1.826 1.144-.345-.679-1.032-1.144-1.826-1.144-1.14 0-2.063.955-2.063 2.132 0 1.176.707 2.254 1.62 3.139s2.269 1.729 2.269 1.729 1.312-.83 2.269-1.729c1.021-.959 1.62-1.96 1.62-3.14 0-1.179-.923-2.131-2.063-2.131M6.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m13.7-7h-5.4a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h5.4a.8.8 0 0 0 .8-.8v-5.4a.8.8 0 0 0-.8-.8M2.5 10l4-7 4 7z"
      />
    </svg>
  );
};
SvgSiWidgetAlt1.displayName = "SvgSiWidgetAlt1";
const ForwardRef = forwardRef(SvgSiWidgetAlt1);
const Memo = memo(ForwardRef);
export default Memo;
