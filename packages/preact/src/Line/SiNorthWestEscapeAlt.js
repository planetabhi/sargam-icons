import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiNorthWestEscapeAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M14 14 6 6m0 0v4m0-4h4m5 3h.6c1.33 0 2.4 1.07 2.4 2.4v4.2c0 1.33-1.07 2.4-2.4 2.4h-4.2C10.07 18 9 16.93 9 15.6V15"
      />
    </svg>
  );
};
SvgSiNorthWestEscapeAlt.displayName = "SvgSiNorthWestEscapeAlt";
const ForwardRef = forwardRef(SvgSiNorthWestEscapeAlt);
const Memo = memo(ForwardRef);
export default Memo;
