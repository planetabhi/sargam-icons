import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiExpandMore = ({ title, titleId, ...props }, ref) => {
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
        d="M7.293 9.293a1 1 0 0 1 1.414 0L12 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiExpandMore.displayName = "SvgSiExpandMore";
const ForwardRef = forwardRef(SvgSiExpandMore);
const Memo = memo(ForwardRef);
export default Memo;
