import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiStar = ({ title, titleId, ...props }, ref) => {
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
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m12 2 2.4 7.619 7.6-.005-6.114 4.181 2.29 7.253L12 16.624l-6.181 4.424 2.29-7.253L2 9.615l7.595.004z"
      />
    </svg>
  );
};
SvgSiStar.displayName = "SvgSiStar";
const ForwardRef = forwardRef(SvgSiStar);
const Memo = memo(ForwardRef);
export default Memo;
