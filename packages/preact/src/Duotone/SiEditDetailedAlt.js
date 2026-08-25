import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiEditDetailedAlt = ({ title, titleId, ...props }, ref) => {
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
        d="m4.929 19.071.707-3.536 9.192-9.192 2.829 2.829-9.193 9.192z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M19.071 7.757 8.464 18.364l-3.535.707.707-3.535L16.243 4.929m2.828 2.828a2 2 0 0 0-2.828-2.828m2.828 2.828-1.414 1.415-2.829-2.829 1.415-1.414"
      />
    </svg>
  );
};
SvgSiEditDetailedAlt.displayName = "SvgSiEditDetailedAlt";
const ForwardRef = forwardRef(SvgSiEditDetailedAlt);
const Memo = memo(ForwardRef);
export default Memo;
