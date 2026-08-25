import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPlay = ({ title, titleId, ...props }, ref) => {
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
        d="m6.192 3.67 13.568 7.633a.8.8 0 0 1 0 1.394L6.192 20.33A.8.8 0 0 1 5 19.632V4.368a.8.8 0 0 1 1.192-.697"
      />
    </svg>
  );
};
SvgSiPlay.displayName = "SvgSiPlay";
const ForwardRef = forwardRef(SvgSiPlay);
const Memo = memo(ForwardRef);
export default Memo;
