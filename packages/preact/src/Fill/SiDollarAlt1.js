import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiDollarAlt1 = ({ title, titleId, ...props }, ref) => {
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
        d="M13 13.52c.24.136.415.265.544.39.252.244.376.513.408.97.033.468-.16.848-.536 1.158-.123.102-.265.19-.416.268zm-2-3.038a2.7 2.7 0 0 1-.549-.391c-.25-.243-.374-.512-.406-.97-.033-.47.16-.85.536-1.16q.188-.153.419-.27z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a1 1 0 0 0-1 1v.556a4.6 4.6 0 0 0-1.691.862c-.781.643-1.345 1.615-1.26 2.84.06.856.342 1.62 1.009 2.267.488.474 1.142.842 1.942 1.166v3.89a3.9 3.9 0 0 1-1.354-.481 1 1 0 0 0-1.012 1.724 5.9 5.9 0 0 0 2.366.77V19a1 1 0 0 0 2 0v-.559a4.6 4.6 0 0 0 1.688-.859c.78-.643 1.345-1.616 1.26-2.842-.06-.856-.344-1.62-1.011-2.266-.488-.473-1.14-.84-1.937-1.164V7.42c.476.076.939.238 1.352.48a1 1 0 0 0 1.011-1.725A5.9 5.9 0 0 0 13 5.405V5a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
SvgSiDollarAlt1.displayName = "SvgSiDollarAlt1";
const ForwardRef = forwardRef(SvgSiDollarAlt1);
const Memo = memo(ForwardRef);
export default Memo;
