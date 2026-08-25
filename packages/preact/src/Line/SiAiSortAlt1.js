import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiAiSortAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M8.4 21H4.6A1.6 1.6 0 0 1 3 19.4v-3.8A1.6 1.6 0 0 1 4.6 14h3.8a1.6 1.6 0 0 1 1.6 1.6v3.8A1.6 1.6 0 0 1 8.4 21m11 0h-3.8a1.6 1.6 0 0 1-1.6-1.6v-3.8a1.6 1.6 0 0 1 1.6-1.6h3.8a1.6 1.6 0 0 1 1.6 1.6v3.8a1.6 1.6 0 0 1-1.6 1.6m-11-11H4.6A1.6 1.6 0 0 1 3 8.4V4.6A1.6 1.6 0 0 1 4.6 3h3.8A1.6 1.6 0 0 1 10 4.6v3.8A1.6 1.6 0 0 1 8.4 10m8.43-2.684.476 1.908c.05.202.337.202.388 0l.477-1.908a.2.2 0 0 1 .145-.145l1.908-.477c.202-.05.202-.338 0-.388l-1.908-.477a.2.2 0 0 1-.145-.145l-.477-1.908c-.05-.202-.337-.202-.388 0l-.477 1.908a.2.2 0 0 1-.145.145l-1.908.477c-.202.05-.202.338 0 .388l1.908.477a.2.2 0 0 1 .145.145"
      />
    </svg>
  );
};
SvgSiAiSortAlt1.displayName = "SvgSiAiSortAlt1";
const ForwardRef = forwardRef(SvgSiAiSortAlt1);
const Memo = memo(ForwardRef);
export default Memo;
