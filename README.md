# Web socket tutorial

- In an ES module, you cannot use __dirname, so follow
- following steps

 - import path from 'path';
 - import { fileURLToPath } from 'url';
 - const __filename = fileURLToPath(import.meta.url);

 - const __dirname = path.dirname(__filename);

 ## For ES6 module refer this file
 https://stackoverflow.com/questions/65721253/how-to-use-socket-io-in-node-js-with-es6-syntax