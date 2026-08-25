import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiDashboardVert = ({ title, titleId, ...props }, ref) => {
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
        d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M13 4v5h7v2h-7v9h-2V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiDashboardVert.displayName = "SvgSiDashboardVert";
const ForwardRef = forwardRef(SvgSiDashboardVert);
const Memo = memo(ForwardRef);
export default Memo;
