import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiQuote = ({ title, titleId, ...props }, ref) => {
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
        d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15-2.886-.234-3.729-2.013-3.729-3.464 0-1.967 1.51-3.512 3.374-3.465 1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15-2.886-.234-3.729-2.013-3.729-3.464 0-1.967 1.51-3.512 3.374-3.465 1.775-.047 3.817 1.311 4.039 4.448"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15-2.886-.234-3.729-2.013-3.729-3.464 0-1.967 1.51-3.512 3.374-3.465 1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15-2.886-.234-3.729-2.013-3.729-3.464 0-1.967 1.51-3.512 3.374-3.465 1.775-.047 3.817 1.311 4.039 4.448"
      />
    </svg>
  );
};
SvgSiQuote.displayName = "SvgSiQuote";
const ForwardRef = forwardRef(SvgSiQuote);
const Memo = memo(ForwardRef);
export default Memo;
