import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAlignVertCenterSimple = ({ title, titleId, ...props }, ref) => {
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
        d="M1 12a1 1 0 0 1 1-1h7V4.6A1.6 1.6 0 0 1 10.6 3h2.8A1.6 1.6 0 0 1 15 4.6V11h7a1 1 0 1 1 0 2h-7v6.4a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 19.4V13H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAlignVertCenterSimple.displayName = "SvgSiAlignVertCenterSimple";
const ForwardRef = forwardRef(SvgSiAlignVertCenterSimple);
const Memo = memo(ForwardRef);
export default Memo;
