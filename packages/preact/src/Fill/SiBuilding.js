import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiBuilding = ({ title, titleId, ...props }, ref) => {
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
        d="M21.2 1A1.8 1.8 0 0 1 23 2.8v1.4A1.8 1.8 0 0 1 21.2 6H21v13.6a3.4 3.4 0 0 1-3.4 3.4H6.4A3.4 3.4 0 0 1 3 19.6V6h-.2A1.8 1.8 0 0 1 1 4.2V2.8A1.8 1.8 0 0 1 2.8 1zM9.8 18A1.8 1.8 0 0 0 8 19.8V22h2v-2h4v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zM8 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M8 7a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1M3 4h18V3H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiBuilding.displayName = "SvgSiBuilding";
const ForwardRef = forwardRef(SvgSiBuilding);
const Memo = memo(ForwardRef);
export default Memo;
