import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiWebcam = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="M12 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a9 9 0 0 0-1 17.945V21H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-5v-2.055A9.001 9.001 0 0 0 12 1m-3 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiWebcam.displayName = "SvgSiWebcam";
const ForwardRef = forwardRef(SvgSiWebcam);
const Memo = memo(ForwardRef);
export default Memo;
