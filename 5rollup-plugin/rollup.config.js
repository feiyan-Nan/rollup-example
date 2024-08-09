import build from "./plugins/rollup-plugin-build.js";
import generation from "./plugins/rollup-plugin-generation.js";

export default {
    input: 'src/main.js', output: {
        file: 'dist/bundle.cjs.js',//输出文件的路径和名称
        format: 'cjs',//五种输出格式：amd/es/iife/umd/cjs
        name: 'bundleName',//当format为iife和umd时必须提供，将作为全局变量挂在window下
        globals: {
            lodash: '_', jquery: '$'
        }
    }, plugins: [
        // build(),
        // generation(),
    ], external: ['lodash', 'jquery']
}
