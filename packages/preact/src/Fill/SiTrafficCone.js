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
        d="M22 20h-3.278l-1.014-3.646q-.122.066-.265.095A26.8 26.8 0 0 1 12 17c-1.868 0-3.767-.197-5.564-.571a1 1 0 0 1-.153-.045L5.278 20H2a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2M6.817 14.466l.027.005A25.6 25.6 0 0 0 12 15c1.733 0 3.415-.173 5.037-.51a1 1 0 0 1 .148-.019l-1.087-3.911a1 1 0 0 1-.275.093A21 21 0 0 1 12 11a21.4 21.4 0 0 1-4.108-.404zM8.43 8.665A19.3 19.3 0 0 0 12 9a19 19 0 0 0 3.457-.313q.058-.01.116-.015L14.16 3.59a.8.8 0 0 0-.77-.59h-2.78c-.36 0-.67.24-.77.59z"
      />
    </svg>
  );
};
SvgSiTrafficCone.displayName = "SvgSiTrafficCone";
const ForwardRef = forwardRef(SvgSiTrafficCone);
const Memo = memo(ForwardRef);
export default Memo;
