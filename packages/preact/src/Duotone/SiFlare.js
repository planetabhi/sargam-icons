import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiFlare = ({ title, titleId, ...props }, ref) => {
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
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          fillOpacity={0.16}
          d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M7 12H1m22 0h-6m-5 5v6m3.536-7.464 1.414 1.414m-9.9-9.9 1.414 1.414m7.072 0L16.95 7.05m-9.9 9.9 1.414-1.414M12 1v6m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
SvgSiFlare.displayName = "SvgSiFlare";
const ForwardRef = forwardRef(SvgSiFlare);
const Memo = memo(ForwardRef);
export default Memo;
