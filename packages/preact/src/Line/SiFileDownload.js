import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiFileDownload = ({ title, titleId, ...props }, ref) => {
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
        d="m8 12 4 4m0 0 4-4m-4 4V4m7 13v.6c0 1.33-1.07 2.4-2.4 2.4H7.4C6.07 20 5 18.93 5 17.6V17"
      />
    </svg>
  );
};
SvgSiFileDownload.displayName = "SvgSiFileDownload";
const ForwardRef = forwardRef(SvgSiFileDownload);
const Memo = memo(ForwardRef);
export default Memo;
