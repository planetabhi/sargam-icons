import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiNotificationsAlt2 = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M6.043 18a2.03 2.03 0 0 1-1.718-.95 2.08 2.08 0 0 1-.142-1.972l.545-1.212A13.5 13.5 0 0 0 5.882 9.23l.031-.473A6.2 6.2 0 0 1 7.83 4.666 6.07 6.07 0 0 1 11.998 3a6.07 6.07 0 0 1 4.168 1.666 6.2 6.2 0 0 1 1.917 4.09l.031.474a13.5 13.5 0 0 0 1.154 4.636l.546 1.211a2.08 2.08 0 0 1-.138 1.976 2.03 2.03 0 0 1-1.723.947z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M15 18a3 3 0 1 1-6 0m-2.957 0a2.03 2.03 0 0 1-1.718-.95 2.08 2.08 0 0 1-.142-1.972l.545-1.212A13.5 13.5 0 0 0 5.882 9.23l.031-.473A6.2 6.2 0 0 1 7.83 4.666 6.07 6.07 0 0 1 11.998 3a6.07 6.07 0 0 1 4.168 1.666 6.2 6.2 0 0 1 1.917 4.09l.031.474a13.5 13.5 0 0 0 1.154 4.636l.546 1.211a2.08 2.08 0 0 1-.138 1.976 2.03 2.03 0 0 1-1.723.947z"
      />
    </svg>
  );
};
SvgSiNotificationsAlt2.displayName = "SvgSiNotificationsAlt2";
const ForwardRef = forwardRef(SvgSiNotificationsAlt2);
const Memo = memo(ForwardRef);
export default Memo;
