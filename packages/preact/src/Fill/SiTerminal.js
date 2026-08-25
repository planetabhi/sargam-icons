import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiTerminal = ({ title, titleId, ...props }, ref) => {
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
        d="M4.707 5.293a1 1 0 0 0-1.414 1.414L8.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414zM12 17a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
SvgSiTerminal.displayName = "SvgSiTerminal";
const ForwardRef = forwardRef(SvgSiTerminal);
const Memo = memo(ForwardRef);
export default Memo;
