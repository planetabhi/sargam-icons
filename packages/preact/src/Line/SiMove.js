import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMove = ({ title, titleId, ...props }, ref) => {
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
        d="m19 15 3-3m0 0-3-3m3 3H2m0 0 3 3m-3-3 3-3m10-4-3-3m0 0L9 5m3-3v20m0 0 3-3m-3 3-3-3"
      />
    </svg>
  );
};
SvgSiMove.displayName = "SvgSiMove";
const ForwardRef = forwardRef(SvgSiMove);
const Memo = memo(ForwardRef);
export default Memo;
