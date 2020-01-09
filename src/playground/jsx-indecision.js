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
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderFunc()
  }
}

const onMakeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length)
  console.log(randNum)
  const option = app.options[randNum]
  console.log(option)
}
const removeAll = () => {
  app.options = []
  renderFunc()
}

const numbers = [55, 101, 1001]
const appRoot = document.getElementById('app')

const renderFunc = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length ? <p>Here are your options</p> : <p>No options</p>}
      {/* <p>{app.options.length}</p> */}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Delete all options</button>
      <ol>
        {app.options.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          name='option'
        />
        <button>What should I do?
          Add option
        </button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderFunc()
