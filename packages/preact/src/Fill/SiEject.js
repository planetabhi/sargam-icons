import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiEject = ({ title, titleId, ...props }, ref) => {
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
        d="M4.18 13.427A1 1 0 0 0 5 15h14a1 1 0 0 0 .82-1.573l-7-10a1 1 0 0 0-1.64 0zM4 19.2A1.8 1.8 0 0 0 5.8 21h12.4a1.8 1.8 0 0 0 1.8-1.8v-.4a1.8 1.8 0 0 0-1.8-1.8H5.8A1.8 1.8 0 0 0 4 18.8z"
      />
    </svg>
  );
};
SvgSiEject.displayName = "SvgSiEject";
const ForwardRef = forwardRef(SvgSiEject);
const Memo = memo(ForwardRef);
export default Memo;
