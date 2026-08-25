import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAssignment = ({ title, titleId, ...props }, ref) => {
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
      <path fill="currentColor" d="M11 3a1 1 0 1 1 2 0h2a3 3 0 1 0-6 0z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8v1.2a.8.8 0 0 0 .8.8h6.4a.8.8 0 0 0 .8-.8zm-9 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiAssignment.displayName = "SvgSiAssignment";
const ForwardRef = forwardRef(SvgSiAssignment);
const Memo = memo(ForwardRef);
export default Memo;
