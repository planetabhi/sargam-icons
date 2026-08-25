import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiCrosshairSimple = ({ title, titleId, ...props }, ref) => {
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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12M13 2v4a1 1 0 1 1-2 0V2zM2 11h4a1 1 0 1 1 0 2H2zm16 0a1 1 0 1 0 0 2h4v-2zm-5 7a1 1 0 1 0-2 0v4h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiCrosshairSimple.displayName = "SvgSiCrosshairSimple";
const ForwardRef = forwardRef(SvgSiCrosshairSimple);
const Memo = memo(ForwardRef);
export default Memo;
