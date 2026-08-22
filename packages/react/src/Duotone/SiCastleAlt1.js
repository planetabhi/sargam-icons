import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCastleAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M18 8V2.8a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0-.8.8V6h-4V2.8a.8.8 0 0 0-.8-.8H6.8a.8.8 0 0 0-.8.8v16.8A2.4 2.4 0 0 0 8.4 22H10v-3.2a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8V22h1.6a2.4 2.4 0 0 0 2.4-2.4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M18 8V2.8a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0-.8.8V6h-4V2.8a.8.8 0 0 0-.8-.8H6.8a.8.8 0 0 0-.8.8V8m12 0v11.6a2.4 2.4 0 0 1-2.4 2.4M18 8h4m-6.4 14H14m1.6 0h4a2.4 2.4 0 0 0 2.4-2.4V8m-8 14h-4m4 0v-3.2a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0-.8.8V22m0 0H8.4m0 0A2.4 2.4 0 0 1 6 19.6V8m2.4 14H4.5C3.175 22 2 20.878 2 19.553V8m4 0H2m20 0h1M2 8H1m10 2h2m-3 4h4"
      />
    </svg>
  );
};
SvgSiCastleAlt1.displayName = "SvgSiCastleAlt1";
const ForwardRef = forwardRef(SvgSiCastleAlt1);
const Memo = memo(ForwardRef);
export default Memo;
