import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiVideo = ({ title, titleId, ...props }, ref) => {
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
        d="M23.383 5.076A1 1 0 0 1 24 6v12a1 1 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.09-.217M3.4 6h8.2A2.4 2.4 0 0 1 14 8.4v7.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 15.6V8.4A2.4 2.4 0 0 1 3.4 6"
      />
    </svg>
  );
};
SvgSiVideo.displayName = "SvgSiVideo";
const ForwardRef = forwardRef(SvgSiVideo);
const Memo = memo(ForwardRef);
export default Memo;
