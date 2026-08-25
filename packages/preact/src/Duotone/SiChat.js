import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiChat = ({ title, titleId, ...props }, ref) => {
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
        fillOpacity={0.16}
        d="M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3Z"
      />
    </svg>
  );
};
SvgSiChat.displayName = "SvgSiChat";
const ForwardRef = forwardRef(SvgSiChat);
const Memo = memo(ForwardRef);
export default Memo;
