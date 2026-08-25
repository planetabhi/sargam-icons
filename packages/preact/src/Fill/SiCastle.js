import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiCastle = ({ title, titleId, ...props }, ref) => {
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
        d="M18 1a1 1 0 0 1 1 1v7h2v-.953a1 1 0 1 1 2 0V19.6a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 19.6V8a1 1 0 0 1 2 0v1h2V2a1 1 0 0 1 2 0v1h2V2a1 1 0 1 1 2 0v1h2V2a1 1 0 1 1 2 0v1h2V2a1 1 0 0 1 1-1m-6 13a4 4 0 0 0-4 4v4h2v-4a2 2 0 0 1 4 0v4h2v-4a4 4 0 0 0-4-4m-7-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm12 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-6-6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiCastle.displayName = "SvgSiCastle";
const ForwardRef = forwardRef(SvgSiCastle);
const Memo = memo(ForwardRef);
export default Memo;
