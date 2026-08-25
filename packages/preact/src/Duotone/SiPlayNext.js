import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPlayNext = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" fillOpacity={0.16} d="m3 5 10 7-10 7z" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m3 5 10 7-10 7zm17.2 0h-2.4a.8.8 0 0 0-.8.8v12.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8Z"
      />
    </svg>
  );
};
SvgSiPlayNext.displayName = "SvgSiPlayNext";
const ForwardRef = forwardRef(SvgSiPlayNext);
const Memo = memo(ForwardRef);
export default Memo;
