import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiHelp = ({ title, titleId, ...props }, ref) => {
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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m-.009 14a1 1 0 0 0 0 2H12a1 1 0 0 0 0-2zm2.72-8.33c-.93-1.586-2.934-2.16-4.552-1.211l-.015.01C9.178 7.059 8.5 8.104 8.5 9.34a1 1 0 0 0 2 0c0-.47.253-.899.683-1.163.631-.362 1.415-.157 1.802.504.371.632.17 1.421-.492 1.812a3.33 3.33 0 0 0-1.664 2.885V14a1 1 0 0 0 2 0v-.621c0-.467.244-.91.666-1.153l.005-.003c1.586-.93 2.16-2.934 1.21-4.552"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiHelp.displayName = "SvgSiHelp";
const ForwardRef = forwardRef(SvgSiHelp);
const Memo = memo(ForwardRef);
export default Memo;
