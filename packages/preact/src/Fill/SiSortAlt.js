import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSortAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
SvgSiSortAlt.displayName = "SvgSiSortAlt";
const ForwardRef = forwardRef(SvgSiSortAlt);
const Memo = memo(ForwardRef);
export default Memo;
