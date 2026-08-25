import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiCrop = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" fillOpacity={0.16} d="M6 6v12h12V6z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M2 6h16v16m4-4H6V2"
      />
    </svg>
  );
};
SvgSiCrop.displayName = "SvgSiCrop";
const ForwardRef = forwardRef(SvgSiCrop);
const Memo = memo(ForwardRef);
export default Memo;
