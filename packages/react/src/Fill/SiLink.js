import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiLink = ({ title, titleId, ...props }, ref) => {
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
        d="M13.241 13.281c0-.722-.282-1.416-.785-1.934a1 1 0 0 1 1.436-1.393 4.78 4.78 0 0 1 0 6.654l-.003.004-3.913 3.992a4.62 4.62 0 0 1-6.618 0 4.78 4.78 0 0 1-.008-6.664l2.607-2.74a1 1 0 1 1 1.448 1.38L4.8 15.317l-.009.01a2.78 2.78 0 0 0-.18 3.678l.18.202v.001a2.62 2.62 0 0 0 3.754 0l.002-.002 3.914-3.995c.5-.518.781-1.21.781-1.93M20 6.732a2.78 2.78 0 0 0-.79-1.94v-.001a2.62 2.62 0 0 0-3.754 0l-.003.003-4.049 4.12a2.78 2.78 0 0 0-.232 3.612 1 1 0 0 1-1.6 1.2 4.78 4.78 0 0 1 .4-6.207l.004-.003 4.05-4.123a4.62 4.62 0 0 1 6.615.002 4.777 4.777 0 0 1 .019 6.654l-2.71 2.931a1 1 0 0 1-1.469-1.359l2.71-2.93.018-.02a2.78 2.78 0 0 0 .79-1.94"
      />
    </svg>
  );
};
SvgSiLink.displayName = "SvgSiLink";
const ForwardRef = forwardRef(SvgSiLink);
const Memo = memo(ForwardRef);
export default Memo;
