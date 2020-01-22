class ZarmDocPlugin {
  apply = (compiler) => {
    compiler.hooks.emit.tapAsync('ConsoleLogOnBuildWebpackPlugin', (compilation, callback) => {
      console.log();
      callback();
    });
  };
}

module.exports = ZarmDocPlugin;
