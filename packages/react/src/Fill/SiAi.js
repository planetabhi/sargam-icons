import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiAi = ({ title, titleId, ...props }, ref) => {
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
        d="m9.96 9.137.886-3.099c.332-1.16 1.976-1.16 2.308 0l.885 3.099a1.2 1.2 0 0 0 .824.824l3.099.885c1.16.332 1.16 1.976 0 2.308l-3.099.885a1.2 1.2 0 0 0-.824.824l-.885 3.099c-.332 1.16-1.976 1.16-2.308 0l-.885-3.099a1.2 1.2 0 0 0-.824-.824l-3.099-.885c-1.16-.332-1.16-1.976 0-2.308l3.099-.885a1.2 1.2 0 0 0 .824-.824m8.143 7.37c.289-.843 1.504-.844 1.792 0l.026.087.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zm.896 2.29a1 1 0 0 1-.203.203 1 1 0 0 1 .203.203 1 1 0 0 1 .203-.203 1 1 0 0 1-.203-.204M4.104 2.506c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zM5 4.797a1 1 0 0 1-.203.202A1 1 0 0 1 5 5.203a1 1 0 0 1 .203-.204A1 1 0 0 1 5 4.796"
      />
    </svg>
  );
};
SvgSiAi.displayName = "SvgSiAi";
const ForwardRef = forwardRef(SvgSiAi);
const Memo = memo(ForwardRef);
export default Memo;
