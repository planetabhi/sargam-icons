import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiShieldAlert = ({ title, titleId, ...props }, ref) => {
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
        d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 15h.008M12 7v5m-8-.748c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"
      />
    </svg>
  );
};
SvgSiShieldAlert.displayName = "SvgSiShieldAlert";
const ForwardRef = forwardRef(SvgSiShieldAlert);
const Memo = memo(ForwardRef);
export default Memo;
