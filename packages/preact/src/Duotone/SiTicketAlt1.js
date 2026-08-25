import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiTicketAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M19 12a3 3 0 0 1 3-3V5H9v14h13v-4a3 3 0 0 1-3-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M9 5h11.8A1.2 1.2 0 0 1 22 6.2V9a3 3 0 1 0 0 6v2.8a1.2 1.2 0 0 1-1.2 1.2H9M9 5H3.2A1.2 1.2 0 0 0 2 6.2V9a3 3 0 1 1 0 6v2.8A1.2 1.2 0 0 0 3.2 19H9M9 5v14"
      />
    </svg>
  );
};
SvgSiTicketAlt1.displayName = "SvgSiTicketAlt1";
const ForwardRef = forwardRef(SvgSiTicketAlt1);
const Memo = memo(ForwardRef);
export default Memo;
