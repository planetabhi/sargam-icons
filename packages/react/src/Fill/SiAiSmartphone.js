import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiSmartphone = ({ title, titleId, ...props }, ref) => {
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
        d="M12 12.797a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.6 1A3.4 3.4 0 0 1 19 4.4v15.2a3.4 3.4 0 0 1-3.4 3.4H8.4a3.4 3.4 0 0 1-3.395-3.225L5 19.6V4.4A3.4 3.4 0 0 1 8.4 1zm-2.678 9.595c-.232-.93-1.52-.959-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.96 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297zM11 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAiSmartphone.displayName = "SvgSiAiSmartphone";
const ForwardRef = forwardRef(SvgSiAiSmartphone);
const Memo = memo(ForwardRef);
export default Memo;
