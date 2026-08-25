import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiBriefcases = ({ title, titleId, ...props }, ref) => {
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
        d="M10 6V3.8A1.8 1.8 0 0 1 11.8 2h4.4A1.8 1.8 0 0 1 18 3.8V6h2.6A2.4 2.4 0 0 1 23 8.4v8.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V8.4A2.4 2.4 0 0 1 7.4 6zm2 0V4h4v2zm0 1v11h-2V7zm6 0v11h-2V7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 11a1 1 0 1 0-2 0v5.6C1 20.132 3.868 23 7.4 23H19a1 1 0 1 0 0-2H7.4A4.403 4.403 0 0 1 3 16.6z"
      />
    </svg>
  );
};
SvgSiBriefcases.displayName = "SvgSiBriefcases";
const ForwardRef = forwardRef(SvgSiBriefcases);
const Memo = memo(ForwardRef);
export default Memo;
