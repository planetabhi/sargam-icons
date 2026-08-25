import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSouthWestEscapeAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M8 8.4C8 6.518 9.518 5 11.4 5h4.2C17.482 5 19 6.518 19 8.4v4.2c0 1.882-1.518 3.4-3.4 3.4H15a1 1 0 1 1 0-2h.6c.778 0 1.4-.622 1.4-1.4V8.4c0-.778-.622-1.4-1.4-1.4h-4.2c-.778 0-1.4.622-1.4 1.4V9a1 1 0 1 1-2 0zm6.707.893a1 1 0 0 1 0 1.414L8.414 17H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l6.293-6.293a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSouthWestEscapeAlt.displayName = "SvgSiSouthWestEscapeAlt";
const ForwardRef = forwardRef(SvgSiSouthWestEscapeAlt);
const Memo = memo(ForwardRef);
export default Memo;
