import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiCastle = ({ title, titleId, ...props }, ref) => {
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
        d="M18 10h4v9.6a2.4 2.4 0 0 1-2.4 2.4H15v-4a3 3 0 1 0-6 0v4H4.4A2.4 2.4 0 0 1 2 19.6V10h4V4h12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M22 8.047V19.6a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 19.6V8m0 2h20M6 4h12m-3 18v-4a3 3 0 1 0-6 0v4M6 2v8m4-8v2m4-2v2m4-2v8m-7-3h2m-8 6h2m10 0h2"
      />
    </svg>
  );
};
SvgSiCastle.displayName = "SvgSiCastle";
const ForwardRef = forwardRef(SvgSiCastle);
const Memo = memo(ForwardRef);
export default Memo;
