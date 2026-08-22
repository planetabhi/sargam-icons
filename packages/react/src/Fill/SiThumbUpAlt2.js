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
        fill="currentColor"
        d="M13.501 5.35c0-.85-.214-1.372-.468-1.698a1.8 1.8 0 0 0-.866-.595V6.21c0 .228-.078.45-.222.628L8 11.734V19h10.025c.135 0 .27-.044.384-.132a.73.73 0 0 0 .251-.37l2.308-7.756a.78.78 0 0 0-.108-.664.7.7 0 0 0-.238-.21.6.6 0 0 0-.215-.067l-.073-.004h-5.833a1 1 0 0 1-1-1zm2 2.447h4.834l.158.005a2.6 2.6 0 0 1 1.055.294c.374.195.696.477.94.82a2.78 2.78 0 0 1 .396 2.396l-2.307 7.756a2.72 2.72 0 0 1-.954 1.39c-.401.307-.88.492-1.382.533l-.216.009H7.811a1.8 1.8 0 0 1-1.61 1H2.8A1.8 1.8 0 0 1 1 20.2V9.8A1.8 1.8 0 0 1 2.8 8h3.4a1.8 1.8 0 0 1 1.54.871l2.427-3.013V2.866a1.86 1.86 0 0 1 .685-1.452l.168-.124a1.82 1.82 0 0 1 1.206-.276l.208.037.006.002c.801.2 1.589.624 2.17 1.37.583.748.891 1.731.891 2.927z"
      />
    </svg>
  );
};
SvgSiThumbUpAlt2.displayName = "SvgSiThumbUpAlt2";
const ForwardRef = forwardRef(SvgSiThumbUpAlt2);
const Memo = memo(ForwardRef);
export default Memo;
