import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiTaxiing = ({ title, titleId, ...props }, ref) => {
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
        d="M19.925 10.74 15.5 11l-5.482-4.578A2.2 2.2 0 0 0 8.825 6l-1.29.006L11 11H5.5L4.377 9.898a2 2 0 0 0-1.4-.638L2 9.25l1.985 3.699L10 15h12l-.032-2.165c.002-1.124-.907-2.082-2.043-2.095q.052.03 0 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M19.925 10.74 15.5 11l-5.482-4.578A2.2 2.2 0 0 0 8.825 6l-1.29.006L11 11H5.5L4.377 9.898a2 2 0 0 0-1.4-.638L2 9.25l1.985 3.699L10 15h12l-.032-2.165c.002-1.124-.907-2.082-2.043-2.095m0 0q.052.03 0 0M12 17.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m8 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      />
    </svg>
  );
};
SvgSiTaxiing.displayName = "SvgSiTaxiing";
const ForwardRef = forwardRef(SvgSiTaxiing);
const Memo = memo(ForwardRef);
export default Memo;
