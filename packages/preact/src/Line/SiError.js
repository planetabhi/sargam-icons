import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiError = ({ title, titleId, ...props }, ref) => {
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
        d="M12 16h.008M12 8v5M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
      />
    </svg>
  );
};
SvgSiError.displayName = "SvgSiError";
const ForwardRef = forwardRef(SvgSiError);
const Memo = memo(ForwardRef);
export default Memo;
