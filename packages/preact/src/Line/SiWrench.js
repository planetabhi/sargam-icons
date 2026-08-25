import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiWrench = ({ title, titleId, ...props }, ref) => {
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
        d="M21.764 7.035c-.076-.282-.425-.36-.631-.154l-3.082 3.08a1.2 1.2 0 0 1-1.697 0l-2.32-2.32a1.2 1.2 0 0 1 0-1.698l3.08-3.075c.206-.207.129-.556-.153-.632a6.8 6.8 0 0 0-6.589 1.748c-2.04 2.04-2.502 5.044-1.416 7.536L3.7 16.768a2.4 2.4 0 0 0 0 3.396l.14.14a2.4 2.4 0 0 0 3.393 0l5.263-5.258c2.49 1.074 5.484.606 7.518-1.43 1.787-1.783 2.362-4.307 1.75-6.581"
      />
    </svg>
  );
};
SvgSiWrench.displayName = "SvgSiWrench";
const ForwardRef = forwardRef(SvgSiWrench);
const Memo = memo(ForwardRef);
export default Memo;
