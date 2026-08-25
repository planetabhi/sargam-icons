import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiFlagAlt4 = ({ title, titleId, ...props }, ref) => {
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
        d="m3 15.044 2.727-.668a9.03 9.03 0 0 1 6.11.657l.107.052a9.03 9.03 0 0 0 5.99.684L21 15.064l-.005-10.116-3.061.705a9.03 9.03 0 0 1-5.99-.685l-.106-.052a9.03 9.03 0 0 0-6.111-.657L3 4.927m0 10.117V4.927z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M3 3v18M3 4.927l2.727-.668a9.03 9.03 0 0 1 6.11.657l.107.052a9.03 9.03 0 0 0 5.99.685l3.061-.705L21 15.064l-3.065.705a9.03 9.03 0 0 1-5.991-.684l-.106-.052a9.03 9.03 0 0 0-6.111-.657L3 15.044z"
      />
    </svg>
  );
};
SvgSiFlagAlt4.displayName = "SvgSiFlagAlt4";
const ForwardRef = forwardRef(SvgSiFlagAlt4);
const Memo = memo(ForwardRef);
export default Memo;
