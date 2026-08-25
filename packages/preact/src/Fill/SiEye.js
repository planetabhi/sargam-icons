import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiEye = ({ title, titleId, ...props }, ref) => {
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
        d="M12 5c6.074 0 11 7 11 7-.001.002-4.927 7-11 7S1 12 1 12s4.926-7 11-7m0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiEye.displayName = "SvgSiEye";
const ForwardRef = forwardRef(SvgSiEye);
const Memo = memo(ForwardRef);
export default Memo;
