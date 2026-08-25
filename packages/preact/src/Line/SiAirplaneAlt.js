import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAirplaneAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M15.296 6.291c2.46-2.46 3.866-3.266 4.766-2.366s.101 2.315-2.358 4.774l-1.2 1.2 1.614 7.208c.085.516-.165.972-.532 1.313l-1.414 1.414-2.766-6.472a.4.4 0 0 0-.632-.143l-3.576 3.146.727 2.633c.058.243-.036.517-.22.701l-1.298.855-1.657-3.317-3.31-1.65.855-1.297c.185-.184.46-.278.701-.22l2.634.727 3.146-3.576a.4.4 0 0 0-.143-.632L4.16 7.823l1.414-1.415c.34-.366.797-.617 1.312-.532l7.21 1.614z"
      />
    </svg>
  );
};
SvgSiAirplaneAlt.displayName = "SvgSiAirplaneAlt";
const ForwardRef = forwardRef(SvgSiAirplaneAlt);
const Memo = memo(ForwardRef);
export default Memo;
