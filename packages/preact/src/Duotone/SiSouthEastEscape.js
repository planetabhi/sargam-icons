import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSouthEastEscape = ({ title, titleId, ...props }, ref) => {
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
        strokeWidth={1.5}
        d="M9 17h-.6C7.07 17 6 15.93 6 14.6V8.4C6 7.07 7.07 6 8.4 6h6.2C15.93 6 17 7.07 17 8.4V9m-7 1 8 8m0 0h-4m4 0v-4"
      />
    </svg>
  );
};
SvgSiSouthEastEscape.displayName = "SvgSiSouthEastEscape";
const ForwardRef = forwardRef(SvgSiSouthEastEscape);
const Memo = memo(ForwardRef);
export default Memo;
