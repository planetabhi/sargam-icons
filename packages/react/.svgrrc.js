module.exports = {
    // Transform SVGs to React components
    icon: true,

    // Enable title prop for accessibility
    titleProp: true,

    // Replace black color with currentColor for theming
    replaceAttrValues: { '#000': 'currentColor' },

    // Add displayName for better debugging in React DevTools
    // This helps identify components in the React component tree
    displayName: true,

    // Wrap components with React.memo for performance optimization
    // Prevents unnecessary re-renders when props haven't changed
    memo: true,

    // Enable ref forwarding to allow parent components to access the SVG element
    ref: true,



    // SVGO configuration for SVG optimization
    svgoConfig: {
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        // Keep viewBox for proper scaling
                        removeViewBox: false,
                        // Clean up IDs for better file size
                        cleanupIds: true,
                    },
                },
            },
            // Remove unnecessary attributes
            'removeXMLNS',
        ],
    },

    /**
     * @param {{ imports: string; interfaces: string; componentName: string; props: string; jsx: string; exports: string; }} variables
     * @param {{ tpl: (strings: TemplateStringsArray, ...expr: any[]) => string }} context
     */
    template: (variables, { tpl }) => {
        return tpl`
${variables.imports};
import { useId } from 'react';

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
