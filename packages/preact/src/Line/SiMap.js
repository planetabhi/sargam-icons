import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMap = ({ title, titleId, ...props }, ref) => {
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
        d="M9 3v16M9 3 2 5v16l7-2M9 3l6 2M9 19l6 2m0-16v16m0-16 7-2v16l-7 2"
      />
    </svg>
  );
};
SvgSiMap.displayName = "SvgSiMap";
const ForwardRef = forwardRef(SvgSiMap);
const Memo = memo(ForwardRef);
export default Memo;
