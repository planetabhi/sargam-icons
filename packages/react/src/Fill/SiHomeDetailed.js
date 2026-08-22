import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiHomeDetailed = ({ title, titleId, ...props }, ref) => {
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
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 19.588V8.884l1.451.952a1 1 0 1 0 1.098-1.672L19 5.179V3a1 1 0 1 0-2 0v.866l-3.73-2.448a2.2 2.2 0 0 0-2.58 0L.45 8.165a1 1 0 1 0 1.1 1.67L3 8.88v10.708A2.4 2.4 0 0 0 5.4 22h13.2a2.4 2.4 0 0 0 2.4-2.412M8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m2 5v8H8v-8.2c0-.992.808-1.8 1.8-1.8h4.4c.992 0 1.8.808 1.8 1.8V21h-2v-8z"
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
SvgSiHomeDetailed.displayName = "SvgSiHomeDetailed";
const ForwardRef = forwardRef(SvgSiHomeDetailed);
const Memo = memo(ForwardRef);
export default Memo;
