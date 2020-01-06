'use strict';

console.log('App.js is running');

// JSX 
var appObj = {
  title: 'Star Wars',
  subtitle: 'Return of the Jedi',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObj.title
  ),
  appObj.subtitle && React.createElement(
    'p',
    null,
    appObj.subtitle
  ),
  appObj.options.length ? React.createElement(
    'p',
    null,
    'Here are your options'
  ) : React.createElement(
    'p',
    null,
    'No options'
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
var count = 0;
var add = function add() {
  console.log('Plus one');
};

var minus = function minus() {
  console.log('Minus one');
};

var reset = function reset() {
  console.log('Reset');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    {
      onClick: add },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minus },
    '-1'
  ),
  React.createElement(
    'button',
    {
      onClick: reset },
    'reset'
  )
);
console.log(templateTwo);
// The line above is JSX. The browser does not understand JSX. Using Babeljs.io, JSX was compiled to vanilla JS.
// var template = React.createElement("h1", {
//   id: "someid"
// }, "This is JSX from App.js");
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
// is this working
