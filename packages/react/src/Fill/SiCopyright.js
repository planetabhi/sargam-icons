import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiCopyright = ({ title, titleId, ...props }, ref) => {
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-9.772-5C9.511 7 7.66 9.194 7.66 12s1.852 5 4.567 5c.975 0 1.851-.271 2.565-.8.711-.528 1.205-1.27 1.488-2.124a1 1 0 1 0-1.9-.628c-.17.52-.444.896-.78 1.145-.331.246-.779.407-1.373.407-1.414 0-2.567-1.092-2.567-3s1.153-3 2.567-3c.594 0 1.042.161 1.374.407.335.249.608.626.78 1.145a1 1 0 1 0 1.899-.628c-.283-.854-.777-1.596-1.488-2.123-.714-.53-1.59-.801-2.565-.801"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiCopyright.displayName = "SvgSiCopyright";
const ForwardRef = forwardRef(SvgSiCopyright);
const Memo = memo(ForwardRef);
export default Memo;
