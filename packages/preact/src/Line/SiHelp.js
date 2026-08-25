import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiHelp = ({ title, titleId, ...props }, ref) => {
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
        d="M11.83 14v-.621a2.33 2.33 0 0 1 1.164-2.02c1.126-.66 1.514-2.057.854-3.183s-2.057-1.514-3.183-.854C9.965 7.75 9.5 8.487 9.5 9.341M12 17h-.008M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
      />
    </svg>
  );
};
SvgSiHelp.displayName = "SvgSiHelp";
const ForwardRef = forwardRef(SvgSiHelp);
const Memo = memo(ForwardRef);
export default Memo;
