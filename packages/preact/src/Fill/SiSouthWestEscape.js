import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSouthWestEscape = ({ title, titleId, ...props }, ref) => {
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
        d="M6 8.4C6 6.518 7.518 5 9.4 5h6.2C17.482 5 19 6.518 19 8.4v6.2c0 1.882-1.518 3.4-3.4 3.4H15a1 1 0 1 1 0-2h.6c.778 0 1.4-.622 1.4-1.4V8.4c0-.778-.622-1.4-1.4-1.4H9.4C8.622 7 8 7.622 8 8.4V9a1 1 0 0 1-2 0zm7.293.893a1 1 0 1 1 1.414 1.414L8.414 17H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSouthWestEscape.displayName = "SvgSiSouthWestEscape";
const ForwardRef = forwardRef(SvgSiSouthWestEscape);
const Memo = memo(ForwardRef);
export default Memo;
