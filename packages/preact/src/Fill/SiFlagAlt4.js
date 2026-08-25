import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiFlagAlt4 = ({ title, titleId, ...props }, ref) => {
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
        d="M2 21V3a1 1 0 0 1 2 0v.651l1.49-.364.428-.095c2.15-.427 4.388-.14 6.36.826l.106.051a8.03 8.03 0 0 0 5.325.61l3.061-.705a1 1 0 0 1 1.225.973L22 15.063a1 1 0 0 1-.775.975l-3.066.706c-2.24.516-4.594.247-6.654-.76l-.107-.052a8.04 8.04 0 0 0-5.434-.585L4 15.828V21a1 1 0 1 1-2 0"
      />
    </svg>
  );
};
SvgSiFlagAlt4.displayName = "SvgSiFlagAlt4";
const ForwardRef = forwardRef(SvgSiFlagAlt4);
const Memo = memo(ForwardRef);
export default Memo;
