import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiToggleOff = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </svg>
  );
};
SvgSiToggleOff.displayName = "SvgSiToggleOff";
const ForwardRef = forwardRef(SvgSiToggleOff);
const Memo = memo(ForwardRef);
export default Memo;
