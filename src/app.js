console.log('App.js is running')

// JSX 
var appObj = {
  title: 'Star Wars',
  subtitle: 'Return of the Jedi',
  options: ['One', 'Two']
}
var template = (
  <div>
    <h1>{appObj.title}</h1>
    {appObj.subtitle && <p>{appObj.subtitle}</p>}
    {appObj.options.length ? <p>Here are your options</p> : <p>No options</p>}
    <ol>
      <li>Line item 1</li>
      <li>Line item 2</li>
    </ol>
  </div>
)
var user = {
  name: 'Adoniram',
  age: 46,
  location: 'Miami'
}

function getLocation (location) {
  if(location) {
    return <p>Location: {location}</p>
  }
}

var template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)
// The line above is JSX. The browser does not understand JSX. Using Babeljs.io, JSX was compiled to vanilla JS.
// var template = React.createElement("h1", {
//   id: "someid"
// }, "This is JSX from App.js");
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)