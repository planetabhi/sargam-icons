module.exports = {
    // Transform SVGs to Preact components
    icon: true,

    // Enable title prop for accessibility
    titleProp: true,

    // Replace black color with currentColor for theming
    replaceAttrValues: { '#000': 'currentColor' },

    // Add displayName for better debugging in devtools
    displayName: true,

    // Wrap components with memo to prevent unnecessary re-renders
    memo: true,

    // Forward refs so parents can access the underlying <svg>
    ref: true,

    // SVGO configuration for SVG optimization
    svgoConfig: {
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        removeViewBox: false,
                        cleanupIds: true,
                    },
                },
            },
            'removeXMLNS',
        ],
    },

    /**
     * @param {{ imports: string; interfaces: string; componentName: string; props: string; jsx: string; exports: string; }} variables
     * @param {{ tpl: (strings: TemplateStringsArray, ...expr: any[]) => string }} context
     */
    template: (variables, { tpl }) => {
        return tpl`
import { forwardRef, memo } from 'preact/compat';
import { useId } from 'preact/hooks';

${variables.interfaces};

const ${variables.componentName} = ({ title, titleId, ...props }, ref) => {
  const generatedId = useId();
  const validTitleId = titleId || generatedId;
  const isTitlePresent = !!title;

  return (
    ${variables.jsx}
  );
};

${variables.componentName}.displayName = '${variables.componentName}';

${variables.exports};
`;
    },
    // Customize SVG props to use the computed values
    svgProps: {
        'aria-hidden': '{!isTitlePresent}',
        'aria-labelledby': '{isTitlePresent ? validTitleId : undefined}',
    },
};
