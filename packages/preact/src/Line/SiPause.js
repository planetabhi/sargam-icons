import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPause = ({ title, titleId, ...props }, ref) => {
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
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Zm-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"
      />
    </svg>
  );
};
SvgSiPause.displayName = "SvgSiPause";
const ForwardRef = forwardRef(SvgSiPause);
const Memo = memo(ForwardRef);
export default Memo;
