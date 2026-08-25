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
        fill="currentColor"
        fillRule="evenodd"
        d="M16.707 3.293a1 1 0 0 1 0 1.414L9.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiChevronLeftAlt.displayName = "SvgSiChevronLeftAlt";
const ForwardRef = forwardRef(SvgSiChevronLeftAlt);
const Memo = memo(ForwardRef);
export default Memo;
