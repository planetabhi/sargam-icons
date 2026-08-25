import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAiUnlock = ({ title, titleId, ...props }, ref) => {
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
        d="M10 15.297a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 2a5 5 0 0 1 5 5v3a1 1 0 1 1-2 0V7c0-1.658-1.342-3-3-3s-3 1.342-3 3v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6H13V7a5 5 0 0 1 5-5m-7.078 11.095c-.232-.93-1.52-.959-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.96 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAiUnlock.displayName = "SvgSiAiUnlock";
const ForwardRef = forwardRef(SvgSiAiUnlock);
const Memo = memo(ForwardRef);
export default Memo;
