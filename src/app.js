console.log('App.js is running')

// JSX 
var appObj = {
  title: 'Star Wars',
  subtitle: 'Return of the Jedi'
}
var template = (
  <div>
    <h1>{appObj.title}</h1>
    <p>{appObj.subtitle}</p>
    <ol>
      <li>Line item 1</li>
      <li>Line item 2</li>
    </ol>
  </div>
)

var userName = 'Mike'
var age = 40
var userLocation = 'New York';

var template2 = (
  <div>
    <h1>{userName}</h1>
    <p>age: {age}</p>
    <p>Location: {userLocation}</p>
  </div>
)
// The line above is JSX. The browser does not understand JSX. Using Babeljs.io, JSX was compiled to vanilla JS.
// var template = React.createElement("h1", {
//   id: "someid"
// }, "This is JSX from App.js");
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)