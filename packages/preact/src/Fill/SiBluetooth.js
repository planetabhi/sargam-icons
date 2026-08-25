import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiBluetooth = ({ title, titleId, ...props }, ref) => {
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
        d="M11.576 1.095a1 1 0 0 1 1.065.136l6 5a1 1 0 0 1 .005 1.533L13.639 12l5.007 4.236a1.002 1.002 0 0 1-.005 1.532l-6 5A1 1 0 0 1 11 22v-7.768l-5.355 4.532a1 1 0 0 1-1.291-1.528L10.542 12 4.355 6.764a1 1 0 0 1 1.29-1.528L11 9.766V2a1 1 0 0 1 .576-.905"
      />
    </svg>
  );
};
SvgSiBluetooth.displayName = "SvgSiBluetooth";
const ForwardRef = forwardRef(SvgSiBluetooth);
const Memo = memo(ForwardRef);
export default Memo;
