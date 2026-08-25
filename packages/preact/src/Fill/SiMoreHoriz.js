import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMoreHoriz = ({ title, titleId, ...props }, ref) => {
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
        d="M3 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0m9 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4m7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
      />
    </svg>
  );
};
SvgSiMoreHoriz.displayName = "SvgSiMoreHoriz";
const ForwardRef = forwardRef(SvgSiMoreHoriz);
const Memo = memo(ForwardRef);
export default Memo;
