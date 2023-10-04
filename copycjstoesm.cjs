/* eslint-disable @typescript-eslint/no-var-requires */
(async()=>{
// eslint-disable-next-line no-undef
if (process.versions.node!==undefined){
   // eslint-disable-next-line no-undef
   const fse = require('fs-extra');
   // eslint-disable-next-line no-undef
   const p = require('path');
   // eslint-disable-next-line no-undef
   await fse.copy(p.join(__dirname, 'src', 'cjs'), p.join(__dirname, 'src', 'esm'), {overwrite:true});
}})();