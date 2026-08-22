import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiWebcam = ({ title, titleId, ...props }, ref) => {
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
        d="M11.25 22a.75.75 0 0 0 1.5 0zM6 22v.75h12v-1.5H6zm6 0h.75v-4h-1.5v4zm8-12h-.75A7.25 7.25 0 0 1 12 17.25v1.5A8.75 8.75 0 0 0 20.75 10zm-8 8v-.75A7.25 7.25 0 0 1 4.75 10h-1.5A8.75 8.75 0 0 0 12 18.75zm-8-8h.75A7.25 7.25 0 0 1 12 2.75v-1.5A8.75 8.75 0 0 0 3.25 10zm8-8v.75A7.25 7.25 0 0 1 19.25 10h1.5A8.75 8.75 0 0 0 12 1.25zm2 8h-.75c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 10zm-2 2v-.75c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 12.75zm-2-2h.75c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 10zm2-2v.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 7.25z"
      />
    </svg>
  );
};
SvgSiWebcam.displayName = "SvgSiWebcam";
const ForwardRef = forwardRef(SvgSiWebcam);
const Memo = memo(ForwardRef);
export default Memo;
