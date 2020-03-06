import ReactDOM from 'react-dom';
import toReactElement from 'jsonml-to-react-element';
import md from './demo.md';

console.log(md, toReactElement(md.content));

ReactDOM.render(toReactElement(md.content), document.getElementById('app'));
