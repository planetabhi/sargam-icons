import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiTerminal = ({ title, titleId, ...props }, ref) => {
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
        d="m4 18 6-6-6-6m8 12h8"
      />
    </svg>
  );
};
SvgSiTerminal.displayName = "SvgSiTerminal";
const ForwardRef = forwardRef(SvgSiTerminal);
const Memo = memo(ForwardRef);
export default Memo;
