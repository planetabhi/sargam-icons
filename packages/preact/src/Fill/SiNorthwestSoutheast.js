import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiNorthwestSoutheast = ({ title, titleId, ...props }, ref) => {
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
        d="M4.636 11.293V5.636a1 1 0 0 1 1-1h5.657a1 1 0 0 1 0 2H8.05l9.313 9.314v-3.243a1 1 0 0 1 2 0v5.656a1 1 0 0 1-1 1h-5.656a1 1 0 1 1 0-2h3.242L6.637 8.05v3.243a1 1 0 0 1-2 0"
      />
    </svg>
  );
};
SvgSiNorthwestSoutheast.displayName = "SvgSiNorthwestSoutheast";
const ForwardRef = forwardRef(SvgSiNorthwestSoutheast);
const Memo = memo(ForwardRef);
export default Memo;
