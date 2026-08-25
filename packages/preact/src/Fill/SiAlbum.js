import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAlbum = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAlbum.displayName = "SvgSiAlbum";
const ForwardRef = forwardRef(SvgSiAlbum);
const Memo = memo(ForwardRef);
export default Memo;
