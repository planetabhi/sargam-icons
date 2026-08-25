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
        fillOpacity={0.16}
        d="M4 3.4v17.2A2.4 2.4 0 0 0 6.4 23h11.2a2.4 2.4 0 0 0 2.4-2.4V3.4A2.4 2.4 0 0 0 17.6 1H6.4A2.4 2.4 0 0 0 4 3.4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 8 2 2 4-4M9 16l2 2 4-4M4 20.6V3.4A2.4 2.4 0 0 1 6.4 1h11.2A2.4 2.4 0 0 1 20 3.4v17.2a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 20.6"
      />
    </svg>
  );
};
SvgSiReleaseNotes.displayName = "SvgSiReleaseNotes";
const ForwardRef = forwardRef(SvgSiReleaseNotes);
const Memo = memo(ForwardRef);
export default Memo;
