import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiClipboardCheck = ({ title, titleId, ...props }, ref) => {
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
        d="M7 1.8V3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H17V1.8A1.8 1.8 0 0 0 15.2 0H8.8A1.8 1.8 0 0 0 7 1.8m8 .2H9v2h6zm1.814 8.581a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiClipboardCheck.displayName = "SvgSiClipboardCheck";
const ForwardRef = forwardRef(SvgSiClipboardCheck);
const Memo = memo(ForwardRef);
export default Memo;
