import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAiBriefcase = ({ title, titleId, ...props }, ref) => {
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
        d="M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M15 7V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V7M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7m7.212 4.552-.354 1.415a.4.4 0 0 1-.29.291l-1.416.354c-.404.1-.404.675 0 .776l1.415.354a.4.4 0 0 1 .291.29l.354 1.416c.1.404.675.404.776 0l.354-1.415a.4.4 0 0 1 .29-.291l1.416-.354c.404-.1.404-.675 0-.776l-1.415-.354a.4.4 0 0 1-.291-.29l-.354-1.416c-.1-.404-.675-.404-.776 0"
      />
    </svg>
  );
};
SvgSiAiBriefcase.displayName = "SvgSiAiBriefcase";
const ForwardRef = forwardRef(SvgSiAiBriefcase);
const Memo = memo(ForwardRef);
export default Memo;
