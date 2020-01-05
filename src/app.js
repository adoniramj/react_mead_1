console.log('App.js is running')

// JSX 
var template = (
  <div>  
    <h1>Indecision app</h1>
    <p>This is another element</p>
    <ol>
      <li>Line item 1</li>
      <li>Line item 2</li>
    </ol>
  </div>
)

var template2 = (
  <div>
    <h1>Adoniram</h1>
    <p>age: 46</p>
    <p>Location: Miami</p>
  </div>
)
// The line above is JSX. The browser does not understand JSX. Using Babeljs.io, JSX was compiled to vanilla JS.
// var template = React.createElement("h1", {
//   id: "someid"
// }, "This is JSX from App.js");
var appRoot = document.getElementById('app')
ReactDOM.render(template2, appRoot)