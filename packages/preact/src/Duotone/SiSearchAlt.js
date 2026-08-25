import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSearchAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m21 21-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0"
      />
    </svg>
  );
};
SvgSiSearchAlt.displayName = "SvgSiSearchAlt";
const ForwardRef = forwardRef(SvgSiSearchAlt);
const Memo = memo(ForwardRef);
export default Memo;
