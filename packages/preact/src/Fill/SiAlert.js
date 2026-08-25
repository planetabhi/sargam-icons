import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAlert = ({ title, titleId, ...props }, ref) => {
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
        d="m3.517 17 7.058-11.783a1.667 1.667 0 0 1 2.85 0L20.483 17a1.667 1.667 0 0 1-1.425 2.5H4.942A1.666 1.666 0 0 1 3.517 17M12 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAlert.displayName = "SvgSiAlert";
const ForwardRef = forwardRef(SvgSiAlert);
const Memo = memo(ForwardRef);
export default Memo;
