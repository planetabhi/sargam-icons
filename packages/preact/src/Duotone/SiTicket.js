import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiTicket = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M22 9a3 3 0 1 0 0 6v4H2v-4a3 3 0 1 0 0-6V5h20zM8 9v6h8V9z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M2 15a3 3 0 1 0 0-6V6.2A1.2 1.2 0 0 1 3.2 5h17.6A1.2 1.2 0 0 1 22 6.2V9a3 3 0 1 0 0 6v2.8a1.2 1.2 0 0 1-1.2 1.2H3.2A1.2 1.2 0 0 1 2 17.8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M8 15V9h8v6z"
      />
    </svg>
  );
};
SvgSiTicket.displayName = "SvgSiTicket";
const ForwardRef = forwardRef(SvgSiTicket);
const Memo = memo(ForwardRef);
export default Memo;
