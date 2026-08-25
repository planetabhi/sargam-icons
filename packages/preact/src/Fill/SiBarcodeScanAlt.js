import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiBarcodeScanAlt = ({ title, titleId, ...props }, ref) => {
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
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M3.4 2A1.4 1.4 0 0 0 2 3.4V5a1 1 0 0 1-2 0V3.4A3.4 3.4 0 0 1 3.4 0H5a1 1 0 0 1 0 2zM18 1a1 1 0 0 1 1-1h1.6A3.4 3.4 0 0 1 24 3.4V5a1 1 0 1 1-2 0V3.4A1.4 1.4 0 0 0 20.6 2H19a1 1 0 0 1-1-1M1 18a1 1 0 0 1 1 1v1.6A1.4 1.4 0 0 0 3.4 22H5a1 1 0 1 1 0 2H3.4A3.4 3.4 0 0 1 0 20.6V19a1 1 0 0 1 1-1m22 0a1 1 0 0 1 1 1v1.6a3.4 3.4 0 0 1-3.4 3.4H19a1 1 0 1 1 0-2h1.6a1.4 1.4 0 0 0 1.4-1.4V19a1 1 0 0 1 1-1M9.4 5H6.6A1.6 1.6 0 0 0 5 6.6v2.8A1.6 1.6 0 0 0 6.6 11h2.8A1.6 1.6 0 0 0 11 9.4V6.6A1.6 1.6 0 0 0 9.4 5m-2.8 8h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 9.4 19H6.6A1.6 1.6 0 0 1 5 17.4v-2.8A1.6 1.6 0 0 1 6.6 13m10.8-8h-2.8A1.6 1.6 0 0 0 13 6.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 19 9.4V6.6A1.6 1.6 0 0 0 17.4 5m-2.8 8h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
SvgSiBarcodeScanAlt.displayName = "SvgSiBarcodeScanAlt";
const ForwardRef = forwardRef(SvgSiBarcodeScanAlt);
const Memo = memo(ForwardRef);
export default Memo;
