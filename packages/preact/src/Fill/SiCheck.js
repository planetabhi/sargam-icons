import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiCheck = ({ title, titleId, ...props }, ref) => {
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
        d="M19.633 6.226a1 1 0 0 1 .141 1.407l-9 11a1 1 0 0 1-1.481.074l-5-5a1 1 0 1 1 1.414-1.414l4.219 4.219 8.3-10.145a1 1 0 0 1 1.407-.141"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiCheck.displayName = "SvgSiCheck";
const ForwardRef = forwardRef(SvgSiCheck);
const Memo = memo(ForwardRef);
export default Memo;
