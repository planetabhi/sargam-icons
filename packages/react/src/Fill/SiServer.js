import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiServer = ({ title, titleId, ...props }, ref) => {
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
        d="M18.6 3A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3zM17 17a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM4 14.5v1h16v-1zM17 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM4 8.5v1h16v-1zM17 5a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiServer.displayName = "SvgSiServer";
const ForwardRef = forwardRef(SvgSiServer);
const Memo = memo(ForwardRef);
export default Memo;
