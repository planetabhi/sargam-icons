import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiLink = ({ title, titleId, ...props }, ref) => {
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
        d="M10.372 13.127a3.78 3.78 0 0 1 .317-4.91l4.05-4.124a3.62 3.62 0 0 1 5.187 0 3.78 3.78 0 0 1 0 5.278l-2.709 2.93m-4.043-1.65a3.78 3.78 0 0 1 0 5.261L9.26 19.907a3.62 3.62 0 0 1-5.186 0 3.78 3.78 0 0 1 0-5.278l2.607-2.739"
      />
    </svg>
  );
};
SvgSiLink.displayName = "SvgSiLink";
const ForwardRef = forwardRef(SvgSiLink);
const Memo = memo(ForwardRef);
export default Memo;
