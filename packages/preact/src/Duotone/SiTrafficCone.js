import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiTrafficCone = ({ title, titleId, ...props }, ref) => {
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
        d="M5 21 9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M5 21 9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21M15.64 9.67c-1.18.22-2.4.33-3.64.33-1.32 0-2.6-.13-3.85-.37m9.09 5.84c-1.69.35-3.44.53-5.24.53s-3.63-.19-5.36-.55M2 21h20"
      />
    </svg>
  );
};
SvgSiTrafficCone.displayName = "SvgSiTrafficCone";
const ForwardRef = forwardRef(SvgSiTrafficCone);
const Memo = memo(ForwardRef);
export default Memo;
