import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiWalletAlt = ({ title, titleId, ...props }, ref) => {
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
        <path d="M17.6 4H5a1 1 0 1 1 0-2h12.6C21.132 2 24 4.868 24 8.4V17a1 1 0 1 1-2 0V8.4C22 5.972 20.028 4 17.6 4" />
        <path
          fillRule="evenodd"
          d="M17.6 6H4.4C3.075 6 2 7.164 2 8.6v9.8C2 19.836 3.075 21 4.4 21h13.2c1.325 0 2.4-1.164 2.4-2.6V8.6C20 7.164 18.925 6 17.6 6m-.6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
SvgSiWalletAlt.displayName = "SvgSiWalletAlt";
const ForwardRef = forwardRef(SvgSiWalletAlt);
const Memo = memo(ForwardRef);
export default Memo;
