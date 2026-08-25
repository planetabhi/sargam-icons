import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiBarcodeScan = ({ title, titleId, ...props }, ref) => {
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
        d="M4 5.4A1.4 1.4 0 0 1 5.4 4H7a1 1 0 0 0 0-2H5.4A3.4 3.4 0 0 0 2 5.4V7a1 1 0 0 0 2 0zM17 2a1 1 0 1 0 0 2h1.6A1.4 1.4 0 0 1 20 5.4V7a1 1 0 1 0 2 0V5.4A3.4 3.4 0 0 0 18.6 2zM4 17a1 1 0 1 0-2 0v1.6A3.4 3.4 0 0 0 5.4 22H7a1 1 0 1 0 0-2H5.4A1.4 1.4 0 0 1 4 18.6zm18 0a1 1 0 1 0-2 0v1.6a1.4 1.4 0 0 1-1.4 1.4H17a1 1 0 1 0 0 2h1.6a3.4 3.4 0 0 0 3.4-3.4zM1 11a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
SvgSiBarcodeScan.displayName = "SvgSiBarcodeScan";
const ForwardRef = forwardRef(SvgSiBarcodeScan);
const Memo = memo(ForwardRef);
export default Memo;
