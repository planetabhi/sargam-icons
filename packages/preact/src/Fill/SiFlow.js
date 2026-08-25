import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiFlow = ({ title, titleId, ...props }, ref) => {
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
        d="M13 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-16a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 0 1-2 2.825v10.349A2.998 2.998 0 0 1 12 23a3 3 0 0 1-1-5.826V6.825A2.998 2.998 0 0 1 12 1a3 3 0 0 1 3 3"
      />
    </svg>
  );
};
SvgSiFlow.displayName = "SvgSiFlow";
const ForwardRef = forwardRef(SvgSiFlow);
const Memo = memo(ForwardRef);
export default Memo;
