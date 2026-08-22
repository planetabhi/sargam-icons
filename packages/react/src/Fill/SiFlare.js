import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiFlare = ({ title, titleId, ...props }, ref) => {
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
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M12 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M7.757 6.343a1 1 0 1 0-1.414 1.414l1.414 1.415a1 1 0 1 0 1.415-1.415zM1 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm15 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m-4 4a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m2.828-1.172a1 1 0 0 1 1.415 0l1.414 1.415a1 1 0 1 1-1.414 1.414l-1.415-1.414a1 1 0 0 1 0-1.415m2.829-7.071a1 1 0 1 0-1.414-1.414l-1.415 1.414a1 1 0 0 0 1.415 1.415zm-8.485 8.486a1 1 0 1 0-1.415-1.415l-1.414 1.415a1 1 0 1 0 1.414 1.414zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
SvgSiFlare.displayName = "SvgSiFlare";
const ForwardRef = forwardRef(SvgSiFlare);
const Memo = memo(ForwardRef);
export default Memo;
