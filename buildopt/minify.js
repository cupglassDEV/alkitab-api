import { minify } from 'terser';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as url from 'url';
const _filename = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const distdest = path.join(_dirname, '..', 'dist');
const filedata = (await fs.readFile(path.join(distdest, 'esm', 'index.js'))).toString();
var mini = await minify(filedata, { sourceMap: true });
// to avoid type errors
if (mini.code == undefined)
    mini.code = '';
if (mini.map == undefined)
    mini.map = '';
await fs.writeFile(path.join(distdest, 'min', 'index.min.js'), mini.code);
await fs.writeFile(path.join(distdest, 'min', 'index.min.js.map'), mini.map.toString());
