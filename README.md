Testbed/experiments with typescript + rollup

```json
    "buildJS": "set NODE_ENV=js&& rollup -c",
    "buildTSPlugin": "set NODE_ENV=tsPlugin&& rollup -c",
    "build": "set NODE_ENV=tsc_rollup&& tsc && rollup -c",
```
buildJS: uses /src/main.js (no typescript involved)
buildTSPlugin: uses /src/main.ts via rollup-plugin-typescript2 (also requires rollup-plugin-json for axios to be imported)
build: runs tsc then rollup on the resulting js file (no rollup-plugin-typescript2 or rollup-plugin-json)

buildTSPlugin produces an iife with the signature
```javascript
var SomeName = (function (exports,tty,util,url,http,https,assert,stream,zlib) { [...]
```
whereas the others produce
```javascript
var SomeName = (function (exports) { [...]
```