
const MarkTwain = require('mark-twain');
const toReactElement = require('jsonml-to-react-element');

module.exports = (source) => {
  const { meta, content } = MarkTwain(source);
  return {
    meta,
    content,
    component: toReactElement(content),
  };
};
