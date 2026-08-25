import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSpark = ({ title, titleId, ...props }, ref) => {
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
        d="M3 12h18m-9.005 9.005v-18m-6.362 15.36L18.36 5.637m0 12.735L5.632 5.644"
      />
    </svg>
  );
};
SvgSiSpark.displayName = "SvgSiSpark";
const ForwardRef = forwardRef(SvgSiSpark);
const Memo = memo(ForwardRef);
export default Memo;
