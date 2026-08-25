import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiClearAll = ({ title, titleId, ...props }, ref) => {
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
        d="M8 7a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m-2 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
SvgSiClearAll.displayName = "SvgSiClearAll";
const ForwardRef = forwardRef(SvgSiClearAll);
const Memo = memo(ForwardRef);
export default Memo;
