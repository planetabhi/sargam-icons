import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiFlagAlt3 = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" fillOpacity={0.16} d="M19 3 8 14 4 4z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M8 14 19 3 4 4zm0 0 3 8"
      />
    </svg>
  );
};
SvgSiFlagAlt3.displayName = "SvgSiFlagAlt3";
const ForwardRef = forwardRef(SvgSiFlagAlt3);
const Memo = memo(ForwardRef);
export default Memo;
