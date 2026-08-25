import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMonitorUp = ({ title, titleId, ...props }, ref) => {
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
        d="M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-7.068 4.288a1 1 0 0 0-1.338-.068l-.076.068-2 2a1 1 0 1 0 1.414 1.414l.293-.293V13a1 1 0 1 0 2 0v-2.586l.293.293a1 1 0 1 0 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiMonitorUp.displayName = "SvgSiMonitorUp";
const ForwardRef = forwardRef(SvgSiMonitorUp);
const Memo = memo(ForwardRef);
export default Memo;
