import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiRemove = ({ title, titleId, ...props }, ref) => {
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
        d="M6 12h12"
      />
    </svg>
  );
};
SvgSiRemove.displayName = "SvgSiRemove";
const ForwardRef = forwardRef(SvgSiRemove);
const Memo = memo(ForwardRef);
export default Memo;
