import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiActivity = ({ title, titleId, ...props }, ref) => {
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
        d="M16.024 2a1 1 0 0 1 .924.684L19.721 11H23a1 1 0 1 1 0 2h-4a1 1 0 0 1-.948-.684l-2.125-6.373-5.995 15.42a1 1 0 0 1-1.846.043L4.35 13H1a1 1 0 1 1 0-2h4a1 1 0 0 1 .914.594l3.024 6.805 6.13-15.761.068-.14A1 1 0 0 1 16.024 2"
      />
    </svg>
  );
};
SvgSiActivity.displayName = "SvgSiActivity";
const ForwardRef = forwardRef(SvgSiActivity);
const Memo = memo(ForwardRef);
export default Memo;
