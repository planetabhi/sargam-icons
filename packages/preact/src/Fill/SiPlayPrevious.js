import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPlayPrevious = ({ title, titleId, ...props }, ref) => {
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
        d="M3 5.8A1.8 1.8 0 0 1 4.8 4h1.4A1.8 1.8 0 0 1 8 5.8v12.4A1.8 1.8 0 0 1 6.2 20H4.8A1.8 1.8 0 0 1 3 18.2zm18.462-1.687A1 1 0 0 1 22 5v14a1 1 0 0 1-1.573.82l-10-7a1 1 0 0 1 0-1.64l10-7a1 1 0 0 1 1.035-.067"
      />
    </svg>
  );
};
SvgSiPlayPrevious.displayName = "SvgSiPlayPrevious";
const ForwardRef = forwardRef(SvgSiPlayPrevious);
const Memo = memo(ForwardRef);
export default Memo;
