import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiNorthWestEscape = ({ title, titleId, ...props }, ref) => {
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
        d="M6 5h4a1 1 0 1 1 0 2H8.414l6.293 6.293a1 1 0 0 1-1.414 1.414L7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m8 2a1 1 0 0 1 1-1h.6C17.482 6 19 7.518 19 9.4v6.2c0 1.882-1.518 3.4-3.4 3.4H9.4A3.394 3.394 0 0 1 6 15.6V15a1 1 0 1 1 2 0v.6c0 .778.622 1.4 1.4 1.4h6.2c.778 0 1.4-.622 1.4-1.4V9.4c0-.778-.622-1.4-1.4-1.4H15a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiNorthWestEscape.displayName = "SvgSiNorthWestEscape";
const ForwardRef = forwardRef(SvgSiNorthWestEscape);
const Memo = memo(ForwardRef);
export default Memo;
