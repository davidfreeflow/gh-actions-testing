const PACKAGE_VERSION = require('../package.json').version;
console.log(`/* File generated by "versionReader2.js" do NOT modify */
export const WEB_VERSION = '${PACKAGE_VERSION}';`);
