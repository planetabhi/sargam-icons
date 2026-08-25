import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiClose = ({ title, titleId, ...props }, ref) => {
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
        d="m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757"
      />
    </svg>
  );
};
SvgSiClose.displayName = "SvgSiClose";
const ForwardRef = forwardRef(SvgSiClose);
const Memo = memo(ForwardRef);
export default Memo;
