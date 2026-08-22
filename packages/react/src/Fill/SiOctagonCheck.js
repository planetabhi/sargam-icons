import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiOctagonCheck = ({ title, titleId, ...props }, ref) => {
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
        d="M7.91 3.23 3.23 7.913v-.01a.8.8 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.8.8 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.8.8 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23m8.904 6.351a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiOctagonCheck.displayName = "SvgSiOctagonCheck";
const ForwardRef = forwardRef(SvgSiOctagonCheck);
const Memo = memo(ForwardRef);
export default Memo;
