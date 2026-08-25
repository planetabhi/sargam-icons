import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiTrain = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="M16 21a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.6 1A3.4 3.4 0 0 1 21 4.4v12.2a3.4 3.4 0 0 1-3.4 3.4H6.4a3.4 3.4 0 0 1-3.395-3.225L3 16.6V4.4A3.4 3.4 0 0 1 6.4 1zM8 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6.4 4a.4.4 0 0 0-.4.4V11h12V4.4a.4.4 0 0 0-.4-.4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiTrain.displayName = "SvgSiTrain";
const ForwardRef = forwardRef(SvgSiTrain);
const Memo = memo(ForwardRef);
export default Memo;
