const appRoot = document.getElementById('app')

let visibility = false
const hideInfo = () => {
  console.log('hiding info')
  visibility = !visibility
  renderFunc()
}


const renderFunc = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={hideInfo}>{visibility ? 'Hide details' : 'Show details'}</button>
      {visibility && (
        <div>
          <p>I am being shown</p>
        </div>
      )}
      </div>
  )

  ReactDOM.render(template, appRoot)
}

renderFunc()