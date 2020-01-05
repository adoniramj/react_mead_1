'use strict';

console.log('App.js is running');

// JSX 
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision app'
  ),
  React.createElement(
    'p',
    null,
    'This is another element'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Line item 1'
    ),
    React.createElement(
      'li',
      null,
      'Line item 2'
    )
  )
);

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Adoniram'
  ),
  React.createElement(
    'p',
    null,
    'age: 46'
  ),
  React.createElement(
    'p',
    null,
    'Location: Miami'
  )
);
// The line above is JSX. The browser does not understand JSX. Using Babeljs.io, JSX was compiled to vanilla JS.
// var template = React.createElement("h1", {
//   id: "someid"
// }, "This is JSX from App.js");
var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
