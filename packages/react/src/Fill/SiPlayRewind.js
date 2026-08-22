import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiPlayRewind = ({ title, titleId, ...props }, ref) => {
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
        d="M14 5a1 1 0 0 0-1.573-.82l-10 7a1 1 0 0 0 0 1.64l10 7A1 1 0 0 0 14 19v-2.98l5.427 3.8A1 1 0 0 0 21 19V5a1 1 0 0 0-1.573-.82L14 7.98zm-2 4.38V6.92L4.744 12 12 17.08v-2.46l-2.573-1.8a1 1 0 0 1 0-1.64z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiPlayRewind.displayName = "SvgSiPlayRewind";
const ForwardRef = forwardRef(SvgSiPlayRewind);
const Memo = memo(ForwardRef);
export default Memo;
