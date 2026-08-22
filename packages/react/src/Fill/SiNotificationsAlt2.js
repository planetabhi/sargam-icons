import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiNotificationsAlt2 = ({ title, titleId, ...props }, ref) => {
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
        d="M11.998 3a6.07 6.07 0 0 1 4.168 1.665 6.2 6.2 0 0 1 1.917 4.092l.03.472a13.5 13.5 0 0 0 1.155 4.637l.546 1.211a2.08 2.08 0 0 1-.138 1.976c-.185.29-.441.53-.742.696a2 2 0 0 1-.982.251H16l-.006.206a4 4 0 0 1-7.989 0L8 18H6.043a2 2 0 0 1-.978-.254 2.06 2.06 0 0 1-.74-.695 2.08 2.08 0 0 1-.142-1.973l.545-1.212A13.5 13.5 0 0 0 5.882 9.23l.031-.472A6.2 6.2 0 0 1 7.83 4.665 6.07 6.07 0 0 1 12 3m-2 15 .01.204A2 2 0 0 0 14 18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiNotificationsAlt2.displayName = "SvgSiNotificationsAlt2";
const ForwardRef = forwardRef(SvgSiNotificationsAlt2);
const Memo = memo(ForwardRef);
export default Memo;
