import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiThumbUpAlt2 = ({ title, titleId, ...props }, ref) => {
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M7 20h11.025c.357 0 .704-.118.99-.337s.499-.527.604-.88l2.307-7.756a1.78 1.78 0 0 0-.252-1.53 1.7 1.7 0 0 0-.59-.515 1.6 1.6 0 0 0-.75-.185h-5.833V5.349c0-2.045-1.043-3.01-2.304-3.326a.81.81 0 0 0-.712.164.9.9 0 0 0-.234.302.9.9 0 0 0-.084.378V6.21L7 11.382M2.8 9h3.4a.8.8 0 0 1 .8.8v10.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V9.8a.8.8 0 0 1 .8-.8Z"
      />
    </svg>
  );
};
SvgSiThumbUpAlt2.displayName = "SvgSiThumbUpAlt2";
const ForwardRef = forwardRef(SvgSiThumbUpAlt2);
const Memo = memo(ForwardRef);
export default Memo;
