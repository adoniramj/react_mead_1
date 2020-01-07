console.log('App.js is running')

// JSX 
const app = {
  title: 'Star Wars',
  subtitle: 'Return of the Jedi',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()
  //console.log('Form submitted')
  const option = e.target.elements.option.value
  if(option){
    app.options.push(option)
    e.target.elements.option.value = ''
    renderFunc()
  }
}

const onFormDelete = (e) => {
  e.preventDefault()
  console.log('Delete pressed')
  app.options = []
  renderFunc()
}

const removeAll = () => {
  app.options = []
  renderFunc()
}
const appRoot = document.getElementById('app')

const renderFunc = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length ? <p>Here are your options</p> : <p>No options</p>}
      <p>{app.options.length}</p>
      <form onSubmit={onFormDelete}>
        <button>Delete options</button>
      </form>
      <button onClick={removeAll}>Delete all options</button>
      <ol>
        <li>Line item 1</li>
        <li>Line item 2</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input 
          type='text'
          name='option' 
        />
        <button>
          Add option
        </button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderFunc()
