import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAiMonitor = ({ title, titleId, ...props }, ref) => {
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
        d="M9 20h6M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4m7.406 4.276-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
      />
    </svg>
  );
};
SvgSiAiMonitor.displayName = "SvgSiAiMonitor";
const ForwardRef = forwardRef(SvgSiAiMonitor);
const Memo = memo(ForwardRef);
export default Memo;
