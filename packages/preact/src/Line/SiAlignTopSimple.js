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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M2 2h20M10.6 6h2.8A1.6 1.6 0 0 1 15 7.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V7.6A1.6 1.6 0 0 1 10.6 6"
      />
    </svg>
  );
};
SvgSiAlignTopSimple.displayName = "SvgSiAlignTopSimple";
const ForwardRef = forwardRef(SvgSiAlignTopSimple);
const Memo = memo(ForwardRef);
export default Memo;
