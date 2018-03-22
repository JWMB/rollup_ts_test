import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import merge from 'deepmerge';

const jsConf = {
    input: './src/main.js',
    output: {
        file: './dist/bundle.js',
        sourcemap: true,
        name: 'SomeName',
        format: 'iife'
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs({
            include: 'node_modules/**',
        })
    ]
}

const postTscConf = merge({}, jsConf);
postTscConf.input = postTscConf.input.replace('/src/', '/tsc_output/');


const tsPluginConf = merge({}, jsConf);
tsPluginConf.input = tsPluginConf.input.replace('.js', '.ts');
tsPluginConf.plugins.splice(0, 0, typescript());
tsPluginConf.plugins.splice(tsPluginConf.plugins.length - 1, 0, json());

let conf = null;
switch (process.env.NODE_ENV) {
    case 'js':
        conf = jsConf;
        break;
    case 'tsPlugin':
        conf = tsPluginConf;
        break;
    default:
        conf = postTscConf;
}
export default conf;