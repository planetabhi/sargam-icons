import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPieChart = ({ title, titleId, ...props }, ref) => {
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
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-.75 1v9.689L4.398 18.54l1.061 1.06 6.852-6.851H22v-1.5h-3.537l3.072-3.073-1.06-1.06-4.133 4.133H13.81l5.79-5.791-1.061-1.06-5.79 5.79v-2.4l4.22-4.22-1.06-1.062-3.16 3.16V2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiPieChart.displayName = "SvgSiPieChart";
const ForwardRef = forwardRef(SvgSiPieChart);
const Memo = memo(ForwardRef);
export default Memo;
