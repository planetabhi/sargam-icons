import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMoney = ({ title, titleId, ...props }, ref) => {
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
        d="M4 6.8V8H2.8A1.8 1.8 0 0 0 1 9.8v8.4A1.8 1.8 0 0 0 2.8 20h16.4a1.8 1.8 0 0 0 1.8-1.8V17h1.2c.992 0 1.8-.808 1.8-1.8V6.8c0-.992-.808-1.8-1.8-1.8H5.8C4.808 5 4 5.808 4 6.8M6 7v1h13.2A1.8 1.8 0 0 1 21 9.8V15h1V7zm3 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMoney.displayName = "SvgSiMoney";
const ForwardRef = forwardRef(SvgSiMoney);
const Memo = memo(ForwardRef);
export default Memo;
