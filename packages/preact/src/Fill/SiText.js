import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiText = ({ title, titleId, ...props }, ref) => {
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
        d="M19 7V4h-6v16h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V4H5v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0"
      />
    </svg>
  );
};
SvgSiText.displayName = "SvgSiText";
const ForwardRef = forwardRef(SvgSiText);
const Memo = memo(ForwardRef);
export default Memo;
