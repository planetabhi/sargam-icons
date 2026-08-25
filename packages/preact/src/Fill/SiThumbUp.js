import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiThumbUp = ({ title, titleId, ...props }, ref) => {
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
        d="M9.502 10.375a1 1 0 0 1-.837.451H7V19h11.148c.075-.038.19-.107.337-.217a6 6 0 0 0 1.038-1.01c.74-.902 1.404-2.17 1.47-3.686.075-1.807-.49-2.53-.918-2.85-.493-.369-1.081-.41-1.32-.41H15.52c-.748.008-1.516-.268-1.932-.98-.407-.696-.295-1.504.03-2.172l.022-.041.64-1.174.003-.007.133-.263c.28-.614.36-1.236.245-1.764a2 2 0 0 0-.58-1.033zM7 8.826h1.125l4.837-7.375.055-.075a1 1 0 0 1 1.222-.273c1.326.65 2.116 1.696 2.377 2.899.254 1.167-.01 2.383-.58 3.414l-.623 1.142a.9.9 0 0 0-.082.254.7.7 0 0 0 .169.014h3.256c.39 0 1.506.054 2.517.809 1.076.804 1.814 2.233 1.718 4.537v.002c-.09 2.06-.987 3.727-1.92 4.866a8 8 0 0 1-1.392 1.349c-.216.16-.43.297-.633.4-.163.08-.452.21-.773.211H7v.2A1.8 1.8 0 0 1 5.2 23H2.8A1.8 1.8 0 0 1 1 21.2V8.8A1.8 1.8 0 0 1 2.8 7h2.4A1.8 1.8 0 0 1 7 8.8z"
      />
    </svg>
  );
};
SvgSiThumbUp.displayName = "SvgSiThumbUp";
const ForwardRef = forwardRef(SvgSiThumbUp);
const Memo = memo(ForwardRef);
export default Memo;
