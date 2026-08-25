import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiExpandLess = ({ title, titleId, ...props }, ref) => {
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
        strokeWidth={1.5}
        d="m8 14 4-4 4 4"
      />
    </svg>
  );
};
SvgSiExpandLess.displayName = "SvgSiExpandLess";
const ForwardRef = forwardRef(SvgSiExpandLess);
const Memo = memo(ForwardRef);
export default Memo;
