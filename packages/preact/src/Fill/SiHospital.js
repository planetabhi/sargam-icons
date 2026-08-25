import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiHospital = ({ title, titleId, ...props }, ref) => {
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
        d="M18 1a1 1 0 1 1 0 2v2h4a1 1 0 1 1 0 2v12.6a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 19.6V3a1 1 0 0 1 0-2zM8.8 18A1.8 1.8 0 0 0 7 19.8V22h2v-2h2v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zm9.2 1.6c0 .499-.108.973-.302 1.4h.902a1.4 1.4 0 0 0 1.4-1.4V7h-2zM10 5.5a1 1 0 0 0-1 1v2H7a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiHospital.displayName = "SvgSiHospital";
const ForwardRef = forwardRef(SvgSiHospital);
const Memo = memo(ForwardRef);
export default Memo;
