import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAlignVertCenterDetailed = ({ title, titleId, ...props }, ref) => {
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
        d="M2 12h3m14 0h3m-12 0h4m1.6-4h1.8A1.6 1.6 0 0 1 19 9.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V9.6A1.6 1.6 0 0 1 15.6 8m-9-4h1.8A1.6 1.6 0 0 1 10 5.6v12.8A1.6 1.6 0 0 1 8.4 20H6.6A1.6 1.6 0 0 1 5 18.4V5.6A1.6 1.6 0 0 1 6.6 4"
      />
    </svg>
  );
};
SvgSiAlignVertCenterDetailed.displayName = "SvgSiAlignVertCenterDetailed";
const ForwardRef = forwardRef(SvgSiAlignVertCenterDetailed);
const Memo = memo(ForwardRef);
export default Memo;
