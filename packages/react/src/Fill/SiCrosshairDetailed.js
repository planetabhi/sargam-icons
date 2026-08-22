import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCrosshairDetailed = ({ title, titleId, ...props }, ref) => {
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
        d="M13 2a1 1 0 1 0-2 0v1h2zm-3 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 3.055V5a1 1 0 1 1-2 0V3.055A9.004 9.004 0 0 0 3.055 11H5a1 1 0 1 1 0 2H3.055A9.004 9.004 0 0 0 11 20.945V19a1 1 0 1 1 2 0v1.945A9.004 9.004 0 0 0 20.945 13H19a1 1 0 1 1 0-2h1.945A9.004 9.004 0 0 0 13 3.055M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21 11v2h1a1 1 0 1 0 0-2zm-8 10h-2v1a1 1 0 1 0 2 0zM3 13v-2H2a1 1 0 1 0 0 2z"
      />
    </svg>
  );
};
SvgSiCrosshairDetailed.displayName = "SvgSiCrosshairDetailed";
const ForwardRef = forwardRef(SvgSiCrosshairDetailed);
const Memo = memo(ForwardRef);
export default Memo;
