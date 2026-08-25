import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPinAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M17.455 16.986c2.736.487 4.545 1.33 4.545 2.287C22 20.779 17.523 22 12 22S2 20.78 2 19.273c0-.958 1.81-1.8 4.545-2.287m10.383-12.92c2.757 2.772 2.757 7.208.037 9.944L12.002 19 7.04 14.01a7.034 7.034 0 0 1 0-9.908l.037-.036a6.906 6.906 0 0 1 9.85 0m0 0q-.055-.055 0 0M14 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
SvgSiPinAlt1.displayName = "SvgSiPinAlt1";
const ForwardRef = forwardRef(SvgSiPinAlt1);
const Memo = memo(ForwardRef);
export default Memo;
