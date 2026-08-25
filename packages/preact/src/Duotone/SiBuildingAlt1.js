import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiBuildingAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M20 19.6V2H4v17.6A2.4 2.4 0 0 0 6.4 22H9v-3.2a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8V22h2.6a2.4 2.4 0 0 0 2.4-2.4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M20 2v17.6a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 19.6V2m11 20v-3.2a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V22M3 2h18M8 6h2m4 0h2m-8 4h2m4 0h2m-8 4h2m4 0h2"
      />
    </svg>
  );
};
SvgSiBuildingAlt1.displayName = "SvgSiBuildingAlt1";
const ForwardRef = forwardRef(SvgSiBuildingAlt1);
const Memo = memo(ForwardRef);
export default Memo;
