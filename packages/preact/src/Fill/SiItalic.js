import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiItalic = ({ title, titleId, ...props }, ref) => {
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
        d="M19 2a1 1 0 1 1 0 2h-3.278l-5.334 16H13a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h3.28l5.333-16H11a1 1 0 1 1 0-2z"
      />
    </svg>
  );
};
SvgSiItalic.displayName = "SvgSiItalic";
const ForwardRef = forwardRef(SvgSiItalic);
const Memo = memo(ForwardRef);
export default Memo;
