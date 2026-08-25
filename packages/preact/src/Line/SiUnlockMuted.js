import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiUnlockMuted = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M14 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6"
      />
    </svg>
  );
};
SvgSiUnlockMuted.displayName = "SvgSiUnlockMuted";
const ForwardRef = forwardRef(SvgSiUnlockMuted);
const Memo = memo(ForwardRef);
export default Memo;
