require("dotenv").config();
const svgo = require('@figma-export/transform-svg-with-svgo')

const fileId = process.env.FILE_ID;
const outputters = [
  require("@figma-export/output-components-as-svg")({ output: "./" })
];

const aetherSVGOConfig = [];

/* WIP */
module.exports = {
  commands: [
    ["components", {
        fileId,
        onlyFromPages: ["export"],
        transformers: [svgo({ multipass: true, plugins: aetherSVGOConfig })],
        outputters,
      },
    ]
  ],
};