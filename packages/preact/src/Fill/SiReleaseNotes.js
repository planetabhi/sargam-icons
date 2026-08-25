import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiReleaseNotes = ({ title, titleId, ...props }, ref) => {
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
        d="M17.6 1A2.4 2.4 0 0 1 20 3.4v17.2a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 20.6V3.4A2.4 2.4 0 0 1 6.4 1zm-1.893 12.293a1 1 0 0 0-1.414 0L11 16.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414m0-8a1 1 0 0 0-1.414 0L11 8.586 9.707 7.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiReleaseNotes.displayName = "SvgSiReleaseNotes";
const ForwardRef = forwardRef(SvgSiReleaseNotes);
const Memo = memo(ForwardRef);
export default Memo;
