import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiUserAlt6 = ({ title, titleId, ...props }, ref) => {
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
        d="M5.4 21h13.2c.636 0 1.247-.24 1.697-.67.45-.428.703-1.01.703-1.616a5.58 5.58 0 0 0-1.757-4.04A6.16 6.16 0 0 0 15 13H9a6.16 6.16 0 0 0-4.243 1.674A5.58 5.58 0 0 0 3 18.714c0 .607.253 1.188.703 1.617.45.428 1.06.669 1.697.669"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
SvgSiUserAlt6.displayName = "SvgSiUserAlt6";
const ForwardRef = forwardRef(SvgSiUserAlt6);
const Memo = memo(ForwardRef);
export default Memo;
