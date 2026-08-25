import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiCrop = ({ title, titleId, ...props }, ref) => {
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
        d="M17 22v-3H6a1 1 0 0 1-1-1V7H2a1 1 0 0 1 0-2h3V2a1 1 0 0 1 2 0v3h11a1 1 0 0 1 1 1v11h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0M7 17h10V7H7z"
      />
    </svg>
  );
};
SvgSiCrop.displayName = "SvgSiCrop";
const ForwardRef = forwardRef(SvgSiCrop);
const Memo = memo(ForwardRef);
export default Memo;
