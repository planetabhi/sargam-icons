import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiLeftRight = ({ title, titleId, ...props }, ref) => {
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
        d="M16.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H5.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L5.414 11h13.172l-2.293-2.293a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
};
SvgSiLeftRight.displayName = "SvgSiLeftRight";
const ForwardRef = forwardRef(SvgSiLeftRight);
const Memo = memo(ForwardRef);
export default Memo;
