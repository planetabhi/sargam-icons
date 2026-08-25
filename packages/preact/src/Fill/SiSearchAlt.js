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
        fillRule="evenodd"
        d="M9 2a7 7 0 1 0 4.192 12.606l7.1 7.101a1 1 0 0 0 1.415-1.414l-7.1-7.1A7 7 0 0 0 9 2M4 9a5 5 0 1 1 10 0A5 5 0 0 1 4 9"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSearchAlt.displayName = "SvgSiSearchAlt";
const ForwardRef = forwardRef(SvgSiSearchAlt);
const Memo = memo(ForwardRef);
export default Memo;
