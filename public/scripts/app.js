console.log('App.js is running')

// JSX 
// var template = <p id='someid'>This is JSX from App.js</p> 
// The line above is JSX. The browser does not understand JSX. Using Babeljs.io, JSX was compiled to vanilla JS.
var template = React.createElement("h1", {
  id: "someid"
}, "This is JSX from App.js");
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)