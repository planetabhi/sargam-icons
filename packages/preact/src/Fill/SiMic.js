import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMic = ({ title, titleId, ...props }, ref) => {
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
        d="M12 2C9.769 2 8 3.757 8 5.828v6.344C8 14.242 9.769 16 12 16s4-1.758 4-3.828V5.828C16 3.758 14.231 2 12 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13 20.945V23a1 1 0 1 1-2 0v-2.055A9 9 0 0 1 3 12a1 1 0 1 1 2 0 7 7 0 1 0 14 0 1 1 0 1 1 2 0 9 9 0 0 1-8 8.945"
      />
    </svg>
  );
};
SvgSiMic.displayName = "SvgSiMic";
const ForwardRef = forwardRef(SvgSiMic);
const Memo = memo(ForwardRef);
export default Memo;
