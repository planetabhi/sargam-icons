import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSearch = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="M16 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11m9-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSearch.displayName = "SvgSiSearch";
const ForwardRef = forwardRef(SvgSiSearch);
const Memo = memo(ForwardRef);
export default Memo;
