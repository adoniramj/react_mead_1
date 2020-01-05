'use strict';

console.log('App.js is running');

// JSX 
var appObj = {
  title: 'Star Wars',
  subtitle: 'Return of the Jedi'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObj.title
  ),
  React.createElement(
    'p',
    null,
    appObj.subtitle
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

var userName = 'Mike';
var age = 40;
var userLocation = 'New York';

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName
  ),
  React.createElement(
    'p',
    null,
    'age: ',
    age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    userLocation
  )
);
// The line above is JSX. The browser does not understand JSX. Using Babeljs.io, JSX was compiled to vanilla JS.
// var template = React.createElement("h1", {
//   id: "someid"
// }, "This is JSX from App.js");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
