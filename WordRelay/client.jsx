const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay'); //불러올 컴포넌트


ReactDom.render(<WordRelay />, document.getElementById('root')); //렌더링