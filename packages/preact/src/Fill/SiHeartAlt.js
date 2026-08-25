import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiHeartAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M7.519 2A6.452 6.452 0 0 0 2.98 13.104l.639.645.863.857.003.003 6.85 6.85a1 1 0 0 0 1.413 0l6.85-6.85.002-.002.858-.852.65-.657.002-.002a6.452 6.452 0 0 0-9.068-9.177A6.45 6.45 0 0 0 7.52 2"
      />
    </svg>
  );
};
SvgSiHeartAlt.displayName = "SvgSiHeartAlt";
const ForwardRef = forwardRef(SvgSiHeartAlt);
const Memo = memo(ForwardRef);
export default Memo;
