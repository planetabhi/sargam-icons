import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiMeter = ({ title, titleId, ...props }, ref) => {
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
        d="M12.388 3.007a11.1 11.1 0 0 1 5.463 1.654 10.9 10.9 0 0 1 4.061 4.484l.162.347a10.7 10.7 0 0 1 .855 5.586 10.77 10.77 0 0 1-2.346 5.553c-.19.233-.475.369-.776.369H4.193a1 1 0 0 1-.775-.37 10.77 10.77 0 0 1-2.347-5.552 10.7 10.7 0 0 1 1.017-5.933l.174-.342A10.9 10.9 0 0 1 6.149 4.66 11.1 11.1 0 0 1 12 3zm6.32 6.286a1 1 0 0 0-1.415 0l-4.777 4.776a2 2 0 1 0 1.414 1.414l4.777-4.776a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMeter.displayName = "SvgSiMeter";
const ForwardRef = forwardRef(SvgSiMeter);
const Memo = memo(ForwardRef);
export default Memo;
