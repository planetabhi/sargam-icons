import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPlayForward = ({ title, titleId, ...props }, ref) => {
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
        d="m21 12 .43.614a.75.75 0 0 0 0-1.228zM11 5l.43-.614A.75.75 0 0 0 10.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm.75-4.867a.75.75 0 0 0-1.5 0zM14 12l.43.614a.75.75 0 0 0 0-1.228zM4 5l.43-.614A.75.75 0 0 0 3.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm17-7 .43-.614-10-7L11 5l-.43.614 10 7zm-10 7 .43.614 10-7L21 12l-.43-.614-10 7zm0-14h-.75v4.688h1.5V5zm0 9.133h-.75V19h1.5v-4.867zM14 12l.43-.614-10-7L4 5l-.43.614 10 7zM4 5h-.75v14h1.5V5zm0 14 .43.614 10-7L14 12l-.43-.614-10 7z"
      />
    </svg>
  );
};
SvgSiPlayForward.displayName = "SvgSiPlayForward";
const ForwardRef = forwardRef(SvgSiPlayForward);
const Memo = memo(ForwardRef);
export default Memo;
