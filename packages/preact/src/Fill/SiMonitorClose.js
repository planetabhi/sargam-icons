import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMonitorClose = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-5.068 4.788a1 1 0 0 0-1.414 0L12 9.086l-1.293-1.293a1 1 0 1 0-1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414L12 11.914l1.293 1.293a1 1 0 1 0 1.414-1.414L13.414 10.5l1.293-1.293a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMonitorClose.displayName = "SvgSiMonitorClose";
const ForwardRef = forwardRef(SvgSiMonitorClose);
const Memo = memo(ForwardRef);
export default Memo;
