import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPlayForward = ({ title, titleId, ...props }, ref) => {
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
        d="M4.573 4.18A1 1 0 0 0 3 5v14a1 1 0 0 0 1.573.82L10 16.02V19a1 1 0 0 0 1.573.82l10-7a1 1 0 0 0 0-1.64l-10-7A1 1 0 0 0 10 5v2.98zM12 9.38l2.573 1.8a1 1 0 0 1 0 1.64L12 14.62v2.46L19.256 12 12 6.92z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiPlayForward.displayName = "SvgSiPlayForward";
const ForwardRef = forwardRef(SvgSiPlayForward);
const Memo = memo(ForwardRef);
export default Memo;
