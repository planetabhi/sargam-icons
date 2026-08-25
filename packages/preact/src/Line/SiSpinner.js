import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSpinner = ({ title, titleId, ...props }, ref) => {
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
        d="M12 2v4m0 12v4m-9.995-9.995h4m12 0h4M4.931 4.932l2.828 2.829m8.485 8.485 2.829 2.829m-14.136 0 2.829-2.829m8.485-8.485 2.829-2.829"
      />
    </svg>
  );
};
SvgSiSpinner.displayName = "SvgSiSpinner";
const ForwardRef = forwardRef(SvgSiSpinner);
const Memo = memo(ForwardRef);
export default Memo;
