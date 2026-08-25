import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSwapHoriz = ({ title, titleId, ...props }, ref) => {
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
        d="M7.707 2.293a1 1 0 0 1 0 1.414L5.414 6H21a1 1 0 1 1 0 2H5.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0m8.586 10a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 18H3a1 1 0 1 1 0-2h15.586l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiSwapHoriz.displayName = "SvgSiSwapHoriz";
const ForwardRef = forwardRef(SvgSiSwapHoriz);
const Memo = memo(ForwardRef);
export default Memo;
