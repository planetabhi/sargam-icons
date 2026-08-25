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
      <path
        fill="currentColor"
        fillOpacity={0.16}
        fillRule="evenodd"
        d="M20 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 0v4m-6 0h12m-4-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
SvgSiWebcam.displayName = "SvgSiWebcam";
const ForwardRef = forwardRef(SvgSiWebcam);
const Memo = memo(ForwardRef);
export default Memo;
