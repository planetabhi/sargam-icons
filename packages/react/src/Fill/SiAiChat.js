import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiChat = ({ title, titleId, ...props }, ref) => {
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
        d="M9 10.797a1 1 0 0 0 .204.203 1 1 0 0 0-.204.202A1 1 0 0 0 8.796 11 1 1 0 0 0 9 10.797"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 3c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.926-3.65A.99.99 0 0 0 7.513 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3zM9.922 8.594c-.233-.93-1.52-.958-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.604 0 1.844l1.187.297.297 1.187c.24.959 1.603.959 1.843 0l.297-1.187 1.187-.297c.96-.24.96-1.604 0-1.844l-1.187-.297zM15.5 5.25a.75.75 0 0 0-.727.568L14.48 6.98l-1.163.292a.75.75 0 0 0 0 1.456l1.163.29.292 1.164a.75.75 0 0 0 1.454 0l.292-1.163 1.164-.291a.75.75 0 0 0 0-1.456l-1.164-.292-.291-1.162a.75.75 0 0 0-.728-.568"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAiChat.displayName = "SvgSiAiChat";
const ForwardRef = forwardRef(SvgSiAiChat);
const Memo = memo(ForwardRef);
export default Memo;
