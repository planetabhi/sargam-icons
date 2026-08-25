import { forwardRef, memo } from "preact/compat";
import { useId } from "preact/hooks";
const SvgSiSettingsAlt2 = ({ title, titleId, ...props }, ref) => {
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
        fillRule="evenodd"
        d="m13.487 2 .144 1.722A1.81 1.81 0 0 0 14.77 5.27h.021a1.85 1.85 0 0 0 1.922-.31l1.305-1.139 2.117 2.122-1.139 1.305a1.85 1.85 0 0 0-.31 1.922v.021a1.85 1.85 0 0 0 1.575 1.14l1.739.125v2.979l-1.74.13a1.85 1.85 0 0 0-1.604 1.17v.022a1.85 1.85 0 0 0 .309 1.922l1.14 1.303L18 20.091l-1.305-1.135a1.85 1.85 0 0 0-1.922-.304h-.021a1.87 1.87 0 0 0-1.139 1.587L13.487 22H10.51l-.153-1.787a1.89 1.89 0 0 0-1.138-1.605h-.023a1.85 1.85 0 0 0-1.922.309l-1.303 1.14-2.105-2.105 1.139-1.305a1.85 1.85 0 0 0 .31-1.92v-.023a1.85 1.85 0 0 0-1.575-1.139L2 13.435v-2.979l1.74-.126a1.85 1.85 0 0 0 1.58-1.19 1.85 1.85 0 0 0-.308-1.921L3.874 5.913l2.144-2.087L7.32 4.965a1.86 1.86 0 0 0 1.922.308 1.83 1.83 0 0 0 1.14-1.56L10.509 2zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M22 13.435v-2.979l-1.74-.126a1.85 1.85 0 0 1-1.573-1.139V9.17a1.85 1.85 0 0 1 .309-1.922l1.139-1.305-2.118-2.121-1.304 1.139a1.85 1.85 0 0 1-1.922.309h-.021a1.81 1.81 0 0 1-1.14-1.548L13.487 2h-2.978l-.126 1.713a1.83 1.83 0 0 1-1.14 1.56 1.85 1.85 0 0 1-1.921-.308L6.017 3.826 3.874 5.913l1.139 1.304a1.85 1.85 0 0 1 .309 1.922 1.85 1.85 0 0 1-1.583 1.191L2 10.457v2.978l1.74.13a1.85 1.85 0 0 1 1.573 1.14v.021a1.85 1.85 0 0 1-.309 1.922l-1.139 1.304 2.105 2.104 1.304-1.139a1.85 1.85 0 0 1 1.922-.308h.021a1.89 1.89 0 0 1 1.14 1.604L10.509 22h2.978l.126-1.76a1.87 1.87 0 0 1 1.14-1.588h.02a1.85 1.85 0 0 1 1.923.304L18 20.092l2.104-2.108-1.139-1.305a1.85 1.85 0 0 1-.308-1.921v-.022a1.85 1.85 0 0 1 1.604-1.17z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </svg>
  );
};
SvgSiSettingsAlt2.displayName = "SvgSiSettingsAlt2";
const ForwardRef = forwardRef(SvgSiSettingsAlt2);
const Memo = memo(ForwardRef);
export default Memo;
