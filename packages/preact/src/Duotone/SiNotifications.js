import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiNotifications = ({ title, titleId, ...props }, ref) => {
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
        d="M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6m0 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8 14H4m10 2a2 2 0 1 1-4 0"
      />
    </svg>
  );
};
SvgSiNotifications.displayName = "SvgSiNotifications";
const ForwardRef = forwardRef(SvgSiNotifications);
const Memo = memo(ForwardRef);
export default Memo;
