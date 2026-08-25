import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiThumbDownAlt2 = ({ title, titleId, ...props }, ref) => {
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
        d="M7 3h11.025c.357 0 .704.118.99.337s.499.527.604.88l2.307 7.756a1.78 1.78 0 0 1-.252 1.53 1.7 1.7 0 0 1-.59.515 1.6 1.6 0 0 1-.75.185h-5.833v3.448c0 2.044-1.043 3.01-2.304 3.326a.81.81 0 0 1-.712-.164.9.9 0 0 1-.234-.302.9.9 0 0 1-.084-.378V16.79L7 11.618"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M7 3h11.025c.357 0 .704.118.99.337s.499.527.604.88l2.307 7.756a1.78 1.78 0 0 1-.252 1.53 1.7 1.7 0 0 1-.59.515 1.6 1.6 0 0 1-.75.185h-5.833v3.448c0 2.044-1.043 3.01-2.304 3.326a.81.81 0 0 1-.712-.164.9.9 0 0 1-.234-.302.9.9 0 0 1-.084-.378V16.79L7 11.618M2.8 14h3.4a.8.8 0 0 0 .8-.8V2.8a.8.8 0 0 0-.8-.8H2.8a.8.8 0 0 0-.8.8v10.4a.8.8 0 0 0 .8.8Z"
      />
    </svg>
  );
};
SvgSiThumbDownAlt2.displayName = "SvgSiThumbDownAlt2";
const ForwardRef = forwardRef(SvgSiThumbDownAlt2);
const Memo = memo(ForwardRef);
export default Memo;
