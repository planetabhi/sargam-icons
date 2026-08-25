import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMoreHoriz = ({ title, titleId, ...props }, ref) => {
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
        d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};
SvgSiMoreHoriz.displayName = "SvgSiMoreHoriz";
const ForwardRef = forwardRef(SvgSiMoreHoriz);
const Memo = memo(ForwardRef);
export default Memo;
