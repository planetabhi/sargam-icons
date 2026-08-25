import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiStreetSign = ({ title, titleId, ...props }, ref) => {
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
        d="M12 1v2m0 15v5m0-14v3M6 9 2 6l4-3h12v6zm12 9 4-3-4-3H6v6z"
      />
    </svg>
  );
};
SvgSiStreetSign.displayName = "SvgSiStreetSign";
const ForwardRef = forwardRef(SvgSiStreetSign);
const Memo = memo(ForwardRef);
export default Memo;
