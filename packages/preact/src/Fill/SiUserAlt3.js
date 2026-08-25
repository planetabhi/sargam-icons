import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiUserAlt3 = ({ title, titleId, ...props }, ref) => {
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
        d="M7.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m13.5 14a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-4.6a3.15 3.15 0 0 1 3.15-3.15h11.2a3.15 3.15 0 0 1 3.15 3.15z"
      />
    </svg>
  );
};
SvgSiUserAlt3.displayName = "SvgSiUserAlt3";
const ForwardRef = forwardRef(SvgSiUserAlt3);
const Memo = memo(ForwardRef);
export default Memo;
