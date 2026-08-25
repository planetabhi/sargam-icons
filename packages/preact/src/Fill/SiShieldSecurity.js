import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiShieldSecurity = ({ title, titleId, ...props }, ref) => {
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
        d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M13 10V3h-2v7H5v2h6v9h2v-9h6v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiShieldSecurity.displayName = "SvgSiShieldSecurity";
const ForwardRef = forwardRef(SvgSiShieldSecurity);
const Memo = memo(ForwardRef);
export default Memo;
