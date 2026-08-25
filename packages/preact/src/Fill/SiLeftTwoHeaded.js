import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiLeftTwoHeaded = ({ title, titleId, ...props }, ref) => {
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
        d="M12.293 7.293a1 1 0 1 1 1.414 1.414L11.414 11H20a1 1 0 1 1 0 2h-8.586l2.293 2.293a1 1 0 1 1-1.414 1.414L8.586 13H6.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L6.414 11h2.172z"
      />
    </svg>
  );
};
SvgSiLeftTwoHeaded.displayName = "SvgSiLeftTwoHeaded";
const ForwardRef = forwardRef(SvgSiLeftTwoHeaded);
const Memo = memo(ForwardRef);
export default Memo;
