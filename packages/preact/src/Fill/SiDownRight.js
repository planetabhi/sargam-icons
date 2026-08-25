import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiDownRight = ({ title, titleId, ...props }, ref) => {
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
        d="M6 5a1 1 0 0 0-2 0v5.6A5.4 5.4 0 0 0 9.4 16h7.186l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L16.586 14H9.4A3.4 3.4 0 0 1 6 10.6z"
      />
    </svg>
  );
};
SvgSiDownRight.displayName = "SvgSiDownRight";
const ForwardRef = forwardRef(SvgSiDownRight);
const Memo = memo(ForwardRef);
export default Memo;
