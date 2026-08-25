import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSunSet = ({ title, titleId, ...props }, ref) => {
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
        d="M8.57 17.93A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 4V2M3 13H1m22 0h-2m-1.222-7.778-1.414 1.414m-12.728 0L4.222 5.222M4 18h16M8 21h8m-7.43-3.07A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94z"
      />
    </svg>
  );
};
SvgSiSunSet.displayName = "SvgSiSunSet";
const ForwardRef = forwardRef(SvgSiSunSet);
const Memo = memo(ForwardRef);
export default Memo;
