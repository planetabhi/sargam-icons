import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiHomeDetailed = ({ title, titleId, ...props }, ref) => {
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
        d="M15 22h3.6a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22H9v-9.2c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m1 9 10.26-6.76a1.2 1.2 0 0 1 1.44 0L23 9m-2-1.313V19.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 22 3 20.93 3 19.6V7.682M18 3v2.718M15 8H9m.8 4h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8"
      />
    </svg>
  );
};
SvgSiHomeDetailed.displayName = "SvgSiHomeDetailed";
const ForwardRef = forwardRef(SvgSiHomeDetailed);
const Memo = memo(ForwardRef);
export default Memo;
