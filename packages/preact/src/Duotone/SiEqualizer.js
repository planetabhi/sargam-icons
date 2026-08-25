import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiEqualizer = ({ title, titleId, ...props }, ref) => {
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
        d="M2 12h4m4 0h4m4 0h4M2 16h4m4 0h4m4 0h4M2 20h4m4 0h4m4 0h4M2 8h4m12 0h4m-4-4h4"
      />
    </svg>
  );
};
SvgSiEqualizer.displayName = "SvgSiEqualizer";
const ForwardRef = forwardRef(SvgSiEqualizer);
const Memo = memo(ForwardRef);
export default Memo;
