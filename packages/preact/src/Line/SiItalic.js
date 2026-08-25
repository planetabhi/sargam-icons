import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiItalic = ({ title, titleId, ...props }, ref) => {
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
        d="M15 3 9 21m-4 0h8M11 3h8"
      />
    </svg>
  );
};
SvgSiItalic.displayName = "SvgSiItalic";
const ForwardRef = forwardRef(SvgSiItalic);
const Memo = memo(ForwardRef);
export default Memo;
