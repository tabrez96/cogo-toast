import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

export default {
	input: 'src/index.js',
	output: { file: 'dist/index.js', format: 'cjs', sourcemap: false },
	plugins: [
		external(),
		postcss({ modules: true }),
		url(),
		babel({ exclude: 'node_modules/**', plugins: ['external-helpers'] }),
		resolve(),
		commonjs(),
	],
};
