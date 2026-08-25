import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiCopyAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M12.6 3H5.4A2.4 2.4 0 0 0 3 5.4v7.2A2.4 2.4 0 0 0 5.4 15h7.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 12.6 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M18 9h.6c1.33 0 2.4 1.07 2.4 2.4v7.2c0 1.33-1.07 2.4-2.4 2.4h-7.2C10.07 21 9 19.93 9 18.6V18M5.4 3h7.2A2.4 2.4 0 0 1 15 5.4v7.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 12.6V5.4A2.4 2.4 0 0 1 5.4 3"
      />
    </svg>
  );
};
SvgSiCopyAlt.displayName = "SvgSiCopyAlt";
const ForwardRef = forwardRef(SvgSiCopyAlt);
const Memo = memo(ForwardRef);
export default Memo;
