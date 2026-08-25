import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiCheckAlt = ({ title, titleId, ...props }, ref) => {
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
        d="m5 14 6 6 8-15"
      />
    </svg>
  );
};
SvgSiCheckAlt.displayName = "SvgSiCheckAlt";
const ForwardRef = forwardRef(SvgSiCheckAlt);
const Memo = memo(ForwardRef);
export default Memo;
