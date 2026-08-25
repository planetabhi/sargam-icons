import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMovie = ({ title, titleId, ...props }, ref) => {
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
        d="m15 9 2-6M7 9l2-6M1 9h22M3.4 3h17.2A2.4 2.4 0 0 1 23 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 18.6V5.4A2.4 2.4 0 0 1 3.4 3"
      />
    </svg>
  );
};
SvgSiMovie.displayName = "SvgSiMovie";
const ForwardRef = forwardRef(SvgSiMovie);
const Memo = memo(ForwardRef);
export default Memo;
