import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAlignHorizCenterSimple = ({ title, titleId, ...props }, ref) => {
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
        d="M12 1a1 1 0 0 1 1 1v7h6.4a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6H13v7a1 1 0 1 1-2 0v-7H4.6A1.6 1.6 0 0 1 3 13.4v-2.8A1.6 1.6 0 0 1 4.6 9H11V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAlignHorizCenterSimple.displayName = "SvgSiAlignHorizCenterSimple";
const ForwardRef = forwardRef(SvgSiAlignHorizCenterSimple);
const Memo = memo(ForwardRef);
export default Memo;
