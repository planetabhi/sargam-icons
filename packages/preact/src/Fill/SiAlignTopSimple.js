import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAlignTopSimple = ({ title, titleId, ...props }, ref) => {
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
        d="M2 2a1 1 0 0 0 0 2h20a1 1 0 1 0 0-2zm8.6 5h2.8A1.6 1.6 0 0 1 15 8.6v11.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V8.6A1.6 1.6 0 0 1 10.6 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAlignTopSimple.displayName = "SvgSiAlignTopSimple";
const ForwardRef = forwardRef(SvgSiAlignTopSimple);
const Memo = memo(ForwardRef);
export default Memo;
