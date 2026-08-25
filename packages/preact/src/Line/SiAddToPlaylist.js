import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAddToPlaylist = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M4 11h12m-1 4 2 2 4-4M4 7h12M4 15h8"
      />
    </svg>
  );
};
SvgSiAddToPlaylist.displayName = "SvgSiAddToPlaylist";
const ForwardRef = forwardRef(SvgSiAddToPlaylist);
const Memo = memo(ForwardRef);
export default Memo;
