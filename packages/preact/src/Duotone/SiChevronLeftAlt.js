import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiChevronLeftAlt = ({ title, titleId, ...props }, ref) => {
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
        strokeWidth={1.5}
        d="m16 20-8-8 8-8"
      />
    </svg>
  );
};
SvgSiChevronLeftAlt.displayName = "SvgSiChevronLeftAlt";
const ForwardRef = forwardRef(SvgSiChevronLeftAlt);
const Memo = memo(ForwardRef);
export default Memo;
