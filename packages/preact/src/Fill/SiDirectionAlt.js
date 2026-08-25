import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiDirectionAlt = ({ title, titleId, ...props }, ref) => {
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
        d="M2.293 2.293a1 1 0 0 1 1.11-.208l18 7.92a1 1 0 0 1-.15 1.883l-7.421 1.944-1.944 7.422a1 1 0 0 1-1.883.148l-7.92-18a1 1 0 0 1 .208-1.11"
      />
    </svg>
  );
};
SvgSiDirectionAlt.displayName = "SvgSiDirectionAlt";
const ForwardRef = forwardRef(SvgSiDirectionAlt);
const Memo = memo(ForwardRef);
export default Memo;
