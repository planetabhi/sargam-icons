import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiClick = ({ title, titleId, ...props }, ref) => {
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
        d="M12 2v3m-6.995 6.995h-3m2.926-7.063 2.12 2.122m12.022-2.129L16.95 7.047m-9.9 9.9-2.12 2.12M11 11l10 4.4-4.437 1.163L15.4 21z"
      />
    </svg>
  );
};
SvgSiClick.displayName = "SvgSiClick";
const ForwardRef = forwardRef(SvgSiClick);
const Memo = memo(ForwardRef);
export default Memo;
