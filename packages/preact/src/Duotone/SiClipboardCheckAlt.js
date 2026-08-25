import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiClipboardCheckAlt = ({ title, titleId, ...props }, ref) => {
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
        fillOpacity={0.16}
        d="M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 3h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10m4 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0M8 14l3 3 5-7"
      />
    </svg>
  );
};
SvgSiClipboardCheckAlt.displayName = "SvgSiClipboardCheckAlt";
const ForwardRef = forwardRef(SvgSiClipboardCheckAlt);
const Memo = memo(ForwardRef);
export default Memo;
