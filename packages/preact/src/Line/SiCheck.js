import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiCheck = ({ title, titleId, ...props }, ref) => {
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
        d="m5 13 5 5 9-11"
      />
    </svg>
  );
};
SvgSiCheck.displayName = "SvgSiCheck";
const ForwardRef = forwardRef(SvgSiCheck);
const Memo = memo(ForwardRef);
export default Memo;
