import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMeter = ({ title, titleId, ...props }, ref) => {
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
        d="M19.806 20a9.77 9.77 0 0 0 2.13-5.037 9.7 9.7 0 0 0-.922-5.38 9.9 9.9 0 0 0-3.69-4.071A10.1 10.1 0 0 0 12 4c-1.884 0-3.73.524-5.324 1.512a9.9 9.9 0 0 0-3.69 4.07 9.7 9.7 0 0 0-.921 5.38A9.77 9.77 0 0 0 4.194 20z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.707 15.293 18 10m1.806 10a9.77 9.77 0 0 0 2.13-5.037 9.7 9.7 0 0 0-.922-5.38 9.9 9.9 0 0 0-3.69-4.071A10.1 10.1 0 0 0 12 4c-1.884 0-3.73.524-5.324 1.512a9.9 9.9 0 0 0-3.69 4.07 9.7 9.7 0 0 0-.921 5.38A9.77 9.77 0 0 0 4.194 20zM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
};
SvgSiMeter.displayName = "SvgSiMeter";
const ForwardRef = forwardRef(SvgSiMeter);
const Memo = memo(ForwardRef);
export default Memo;
