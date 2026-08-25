import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiNortheastSouthwest = ({ title, titleId, ...props }, ref) => {
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
        strokeWidth={1.5}
        d="M18.364 5.636 5.636 18.364M18.364 5.636h-5.657m5.657 0v5.657m-12.728 7.07v-5.656m0 5.657h5.657"
      />
    </svg>
  );
};
SvgSiNortheastSouthwest.displayName = "SvgSiNortheastSouthwest";
const ForwardRef = forwardRef(SvgSiNortheastSouthwest);
const Memo = memo(ForwardRef);
export default Memo;
