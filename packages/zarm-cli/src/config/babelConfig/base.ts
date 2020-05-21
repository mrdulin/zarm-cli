export default {
  presets: [
    [require.resolve('@babel/preset-env'), {
      modules: false,
    }],
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-typescript'),
  ],
  plugins: [
    [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
  ],
  env: {
    test: {
      plugins: [
        require.resolve('@babel/plugin-transform-modules-commonjs'),
        require.resolve('@babel/plugin-transform-runtime'),
      ],
    },
  },
};
