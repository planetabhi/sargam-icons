import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiEqualizer = ({ title, titleId, ...props }, ref) => {
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
        d="M18 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM2 7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M2 15a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM1 20a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m0-12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
SvgSiEqualizer.displayName = "SvgSiEqualizer";
const ForwardRef = forwardRef(SvgSiEqualizer);
const Memo = memo(ForwardRef);
export default Memo;
