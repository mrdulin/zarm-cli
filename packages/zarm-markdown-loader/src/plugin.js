class ZarmDocPlugin {
  apply = (compiler) => {
    compiler.hooks.emit.tapAsync('ConsoleLogOnBuildWebpackPlugin', (compilation, callback) => {
      // console.log(compilation);
      callback();
    });
  };
}

module.exports = ZarmDocPlugin;
