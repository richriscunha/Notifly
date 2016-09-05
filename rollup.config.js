import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/notifly.js',
  format: 'umd',
  dest: 'dist/notifly.js',
  moduleName: 'Notifly',
  plugins: [
    babel()
  ]
};
