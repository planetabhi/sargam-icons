import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiPhoneEnabled = ({ title, titleId, ...props }, ref) => {
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
        fillOpacity={0.16}
        d="m16.82 10.27-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m16.82 10.27-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27Z"
      />
    </svg>
  );
};
SvgSiPhoneEnabled.displayName = "SvgSiPhoneEnabled";
const ForwardRef = forwardRef(SvgSiPhoneEnabled);
const Memo = memo(ForwardRef);
export default Memo;
