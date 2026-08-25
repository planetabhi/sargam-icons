import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiUmbrella = ({ title, titleId, ...props }, ref) => {
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
        d="M17.217 19.39c.044 1.391-1.087 2.565-2.521 2.609h-.088c-1.39.043-2.565-1.087-2.608-2.522V12m10 0c0-5.523-4.477-10-10-10S2 6.477 2 12z"
      />
    </svg>
  );
};
SvgSiUmbrella.displayName = "SvgSiUmbrella";
const ForwardRef = forwardRef(SvgSiUmbrella);
const Memo = memo(ForwardRef);
export default Memo;
