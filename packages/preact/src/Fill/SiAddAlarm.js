import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAddAlarm = ({ title, titleId, ...props }, ref) => {
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
        d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8-5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V9a1 1 0 0 1 1-1m5.293-5.707a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414m-10.586 0a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAddAlarm.displayName = "SvgSiAddAlarm";
const ForwardRef = forwardRef(SvgSiAddAlarm);
const Memo = memo(ForwardRef);
export default Memo;
