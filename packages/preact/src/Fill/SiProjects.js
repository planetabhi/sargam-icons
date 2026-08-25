import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiProjects = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M9 4h2v5h9v2h-9v9H9v-9H4V9h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiProjects.displayName = "SvgSiProjects";
const ForwardRef = forwardRef(SvgSiProjects);
const Memo = memo(ForwardRef);
export default Memo;
