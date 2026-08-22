import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAiNoteAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M15.2 0A1.8 1.8 0 0 1 17 1.8V3h1.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H7V1.8A1.8 1.8 0 0 1 8.8 0zm.627 13.587c-.232-.93-1.52-.959-1.817-.087l-.026.087-.296 1.187-1.188.297c-.96.24-.96 1.603 0 1.843l1.188.297.296 1.187c.24.96 1.603.96 1.843 0l.297-1.187 1.188-.297c.958-.24.958-1.603 0-1.843l-1.188-.297zM7 15a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm2-7v2h6V2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAiNoteAlt1.displayName = "SvgSiAiNoteAlt1";
const ForwardRef = forwardRef(SvgSiAiNoteAlt1);
const Memo = memo(ForwardRef);
export default Memo;
