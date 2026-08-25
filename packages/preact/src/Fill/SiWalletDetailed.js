import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiWalletDetailed = ({ title, titleId, ...props }, ref) => {
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
        d="M15.995 13A1 1 0 0 0 15 14c0 .552.445 1 .995 1h.01c.55 0 .995-.448.995-1s-.445-1-.995-1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.448 2h.042C18.38 2 20 3.458 20 5.38v.923c1.178.535 2 1.723 2 3.097v9.2c0 1.872-1.528 3.4-3.4 3.4H5.4A3.407 3.407 0 0 1 2 18.6V5.5A2.5 2.5 0 0 1 4.453 3zM18 5.38V6H4.5a.5.5 0 0 1-.5-.5c0-.278.222-.5.5-.5h.042l11.985-1c.87.018 1.473.672 1.473 1.38M21 11h-6.286c-.947 0-1.714.716-1.714 1.6v2.8c0 .884.768 1.6 1.714 1.6H21z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiWalletDetailed.displayName = "SvgSiWalletDetailed";
const ForwardRef = forwardRef(SvgSiWalletDetailed);
const Memo = memo(ForwardRef);
export default Memo;
