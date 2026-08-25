import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPlay = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" fillOpacity={0.16} d="m5 3 16 9-16 9z" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 3 16 9-16 9z"
      />
    </svg>
  );
};
SvgSiPlay.displayName = "SvgSiPlay";
const ForwardRef = forwardRef(SvgSiPlay);
const Memo = memo(ForwardRef);
export default Memo;
