import React from 'react';
import ReactDOM from 'react-dom';
import toReactElement from 'jsonml-to-react-element';
import md from './demo.md';

let result = [];
let tempArr = [];

md.content.forEach((element) => {
  // console.log(element);
  if (Object.prototype.toString.call(element) === '[object Array]' && element[0] === 'h2') {
    if (tempArr.length > 0) {
      result.push(tempArr);
      tempArr = [];
    }
    tempArr.push('demo');
    tempArr.push(element);
    return;
  }
  if (tempArr.length === 0) {
    result.push(element);
    return;
  }
  tempArr.push(element);
});
result = result.concat(tempArr.splice(1));

console.log(result);

const toDemo = [
  [
    (node) => ['demo'].indexOf(node[0]) > -1,
    (node, index) => React.createElement(
      'div',
      { key: index, className: 'demo' },
      node.slice(1).map((child) => toReactElement(child, toDemo)),
    ),
  ],
  [
    (node) => ['pre'].indexOf(node[0]) > -1,
    (node, index) => {
      return [
        React.createElement(
          'div',
          { key: index, className: 'example' },
          node.slice(2).map((child) => toReactElement(child[1], toDemo)),
        ),
        React.createElement(
          'div',
          { key: index, className: 'source' },
          node.slice(2).map((child) => toReactElement(child[1], toDemo)),
        ),
      ];
    },
  ],
];

console.log(toReactElement(result, toDemo));

ReactDOM.render(toReactElement(result, toDemo), document.getElementById('app'));
