import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiStreetSign = ({ title, titleId, ...props }, ref) => {
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
        d="M12 0a1 1 0 0 1 1 1v2h5v6h-5v3h5l4 3-4 3h-5v5a1 1 0 1 1-2 0v-5H6v-6h5V9H6L2 6l4-3h5V1a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
SvgSiStreetSign.displayName = "SvgSiStreetSign";
const ForwardRef = forwardRef(SvgSiStreetSign);
const Memo = memo(ForwardRef);
export default Memo;
