import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiShieldBad = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m3.648-13.101a1 1 0 1 0-1.415-1.415L12 9.586 9.879 7.464A1 1 0 0 0 8.464 8.88L10.586 11l-2.122 2.121a1 1 0 1 0 1.415 1.415L12 12.414l2.121 2.122a1 1 0 1 0 1.415-1.415L13.414 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiShieldBad.displayName = "SvgSiShieldBad";
const ForwardRef = forwardRef(SvgSiShieldBad);
const Memo = memo(ForwardRef);
export default Memo;
