import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiBus = ({ title, titleId, ...props }, ref) => {
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
        d="M20 12H4v8.4A1.6 1.6 0 0 0 5.6 22h.8A1.6 1.6 0 0 0 8 20.4V19h8v1.4a1.6 1.6 0 0 0 1.6 1.6h.8a1.6 1.6 0 0 0 1.6-1.6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M4 12h16M8 15.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6.4 2h11.2A2.4 2.4 0 0 1 20 4.4v16a1.6 1.6 0 0 1-1.6 1.6h-.8a1.6 1.6 0 0 1-1.6-1.6V19H8v1.4A1.6 1.6 0 0 1 6.4 22h-.8A1.6 1.6 0 0 1 4 20.4v-16A2.4 2.4 0 0 1 6.4 2"
      />
    </svg>
  );
};
SvgSiBus.displayName = "SvgSiBus";
const ForwardRef = forwardRef(SvgSiBus);
const Memo = memo(ForwardRef);
export default Memo;
