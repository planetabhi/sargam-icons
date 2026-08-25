import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiWidget = ({ title, titleId, ...props }, ref) => {
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
        d="M9.2 14H3.8a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h5.4a.8.8 0 0 0 .8-.8v-5.4a.8.8 0 0 0-.8-.8m.938-7.566L7.027 3.323a.8.8 0 0 0-1.131 0L2.784 6.434a.8.8 0 0 0 0 1.132l3.112 3.11a.8.8 0 0 0 1.131 0l3.111-3.11a.8.8 0 0 0 0-1.132M17.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M9.2 14H3.8a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h5.4a.8.8 0 0 0 .8-.8v-5.4a.8.8 0 0 0-.8-.8m.938-7.566L7.027 3.323a.8.8 0 0 0-1.131 0L2.784 6.434a.8.8 0 0 0 0 1.132l3.112 3.11a.8.8 0 0 0 1.131 0l3.111-3.11a.8.8 0 0 0 0-1.132M17.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.775-17.5c-.795 0-1.481.466-1.826 1.144-.345-.679-1.032-1.144-1.826-1.144-1.14 0-2.063.955-2.063 2.132 0 1.176.707 2.254 1.62 3.139s2.269 1.729 2.269 1.729 1.312-.83 2.269-1.729c1.021-.959 1.62-1.96 1.62-3.14 0-1.179-.923-2.131-2.063-2.131"
      />
    </svg>
  );
};
SvgSiWidget.displayName = "SvgSiWidget";
const ForwardRef = forwardRef(SvgSiWidget);
const Memo = memo(ForwardRef);
export default Memo;
