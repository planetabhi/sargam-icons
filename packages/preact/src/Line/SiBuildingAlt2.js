import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiBuildingAlt2 = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M17 2v17.6a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 19.6V2m18 4v13.6a2.4 2.4 0 0 1-2.4 2.4h-4.2M12 22v-3.2a.8.8 0 0 0-.8-.8H8.8a.8.8 0 0 0-.8.8V22M2 2h16m-1 4h5M12 6v2M8 6v2m4 4v2m-4-2v2"
      />
    </svg>
  );
};
SvgSiBuildingAlt2.displayName = "SvgSiBuildingAlt2";
const ForwardRef = forwardRef(SvgSiBuildingAlt2);
const Memo = memo(ForwardRef);
export default Memo;
