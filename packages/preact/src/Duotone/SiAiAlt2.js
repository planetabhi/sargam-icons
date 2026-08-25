import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAiAlt2 = ({ title, titleId, ...props }, ref) => {
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
        d="M10 12V6.8a.8.8 0 0 0-.8-.8H4.8a.8.8 0 0 0-.8.8V12m6 0v6m0-6H4m0 6v-6m13 6V6m0 12h-3m3 0h3M17 6h-3m3 0h3"
      />
    </svg>
  );
};
SvgSiAiAlt2.displayName = "SvgSiAiAlt2";
const ForwardRef = forwardRef(SvgSiAiAlt2);
const Memo = memo(ForwardRef);
export default Memo;
