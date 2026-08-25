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
        fill="currentColor"
        d="M11 22v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m-3.94-6.46a1 1 0 1 1 1.414 1.413l-2.828 2.828a1 1 0 1 1-1.414-1.414zm8.478 0a1 1 0 0 1 1.414 0l2.828 2.827a1 1 0 0 1-1.413 1.414l-2.829-2.828a1 1 0 0 1 0-1.414m-9.532-4.535a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2zm16 0a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2zM4.224 4.225a1 1 0 0 1 1.414 0l2.828 2.829a1 1 0 0 1-1.414 1.414L4.224 5.64a1 1 0 0 1 0-1.414m14.148 0a1 1 0 0 1 1.414 1.415l-2.828 2.828a1 1 0 1 1-1.414-1.414zM11 6V2a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0"
      />
    </svg>
  );
};
SvgSiSpinner.displayName = "SvgSiSpinner";
const ForwardRef = forwardRef(SvgSiSpinner);
const Memo = memo(ForwardRef);
export default Memo;
