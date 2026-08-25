import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiMovie = ({ title, titleId, ...props }, ref) => {
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
        d="M23 9H1v9.6A2.4 2.4 0 0 0 3.4 21h17.2a2.4 2.4 0 0 0 2.4-2.4z"
      />
      <path
        fill="currentColor"
        d="M14.289 8.763a.75.75 0 1 0 1.422.474zm3.423-5.526a.75.75 0 1 0-1.424-.474zM6.288 8.763a.75.75 0 1 0 1.424.474zm3.424-5.526a.75.75 0 1 0-1.424-.474zM3.4 3.75h17.2v-1.5H3.4zm17.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15zm1.65 1.65v13.2h1.5V5.4zm0 13.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15zm-1.65 1.65H3.4v1.5h17.2zm-17.2 0a1.65 1.65 0 0 1-1.65-1.65H.25a3.15 3.15 0 0 0 3.15 3.15zM1.75 18.6V5.4H.25v13.2zm0-13.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 .25 5.4zM1 9.75h22v-1.5H1zm14.712-.513 2-6-1.424-.474-2 6zm-8 0 2-6-1.424-.474-2 6z"
      />
    </svg>
  );
};
SvgSiMovie.displayName = "SvgSiMovie";
const ForwardRef = forwardRef(SvgSiMovie);
const Memo = memo(ForwardRef);
export default Memo;
