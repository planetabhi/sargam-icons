import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiClearAll = ({ title, titleId, ...props }, ref) => {
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
        d="M6 12h12M4 16h12M8 8h12"
      />
    </svg>
  );
};
SvgSiClearAll.displayName = "SvgSiClearAll";
const ForwardRef = forwardRef(SvgSiClearAll);
const Memo = memo(ForwardRef);
export default Memo;
