import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAiEditAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M19 16.25a.75.75 0 0 1 .727.568l.291 1.163 1.164.291a.75.75 0 0 1 0 1.455l-1.164.291-.29 1.164a.75.75 0 0 1-1.456 0l-.29-1.164-1.164-.29a.75.75 0 0 1 0-1.456l1.163-.29.291-1.164A.75.75 0 0 1 19 16.25M4.104 2.507c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.603 0 1.842l-1.188.297-.296 1.188c-.24.96-1.603.96-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.602 0-1.842l1.188-.297.297-1.188zM5 4.797A1 1 0 0 1 4.797 5 1 1 0 0 1 5 5.203 1 1 0 0 1 5.203 5 1 1 0 0 1 5 4.796m11.738-1.069a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838L8.818 18.718a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .136-.256z"
      />
    </svg>
  );
};
SvgSiAiEditAlt1.displayName = "SvgSiAiEditAlt1";
const ForwardRef = forwardRef(SvgSiAiEditAlt1);
const Memo = memo(ForwardRef);
export default Memo;
