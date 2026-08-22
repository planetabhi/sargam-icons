import * as React from "react";
import { forwardRef, memo } from "react";
import { useId } from "react";
const SvgSiJsonAlt2 = ({ title, titleId, ...props }, ref) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.2 3h-.99q-.864 0-1.494.321-.63.304-.954.911-.306.59-.252 1.447l.27 3.535q.09.983-.306 1.393Q4.096 11 2.98 11H2v2h.98q1.116 0 1.494.393.396.41.306 1.393l-.27 3.535q-.054.858.252 1.447.324.607.954.91.63.322 1.494.322h.99M16 3h.99q.864 0 1.494.321.63.304.954.911.306.59.252 1.447l-.27 3.535q-.09.983.306 1.393.378.393 1.494.393h.98v2h-.98q-1.116 0-1.494.393-.396.41-.306 1.393l.27 3.535q.054.858-.252 1.447a2.07 2.07 0 0 1-.954.91q-.63.322-1.494.322H16m-7-5v-1m3 1v-1m3 1v-1"
      />
    </svg>
  );
};
SvgSiJsonAlt2.displayName = "SvgSiJsonAlt2";
const ForwardRef = forwardRef(SvgSiJsonAlt2);
const Memo = memo(ForwardRef);
export default Memo;
