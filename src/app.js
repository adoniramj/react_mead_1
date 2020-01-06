console.log('App.js is running')

// JSX 
const appObj = {
  title: 'Star Wars',
  subtitle: 'Return of the Jedi',
  options: ['One', 'Two']
}
const template = (
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
let count = 0
const add = () => {
  count++
  console.log('Plus one')
  renderData()
}

const minus = () => {
  count--
  console.log('Minus one')
  renderData()
}

const reset = () => {
  count = 0
  console.log('Reset')
  renderData()
}

// The line above is JSX. The browser does not understand JSX. Using Babeljs.io, JSX was compiled to vanilla JS.
// var template = React.createElement("h1", {
  //   id: "someid"
  // }, "This is JSX from App.js");
  const appRoot = document.getElementById('app')
  
  const renderData = () => {
    const templateTwo = (
      <div>
      <h1>Count: {count}</h1>
      <button
      onClick={add}>+1
      </button>
      <button onClick={minus}>
      -1
      </button>
      <button
      onClick={reset}>reset
      </button>
      </div>
      );
    ReactDOM.render(templateTwo, appRoot)  
 }

 renderData()