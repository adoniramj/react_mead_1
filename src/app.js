class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer.'
    const options = ['Thing one', 'Thing two', 'Thing four']
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} title={title} />
        <AddOption />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    console.log(typeof this.props)
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Handle picked')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('Deleting all options')
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handleRemoveall}>Remove all options</button>
        {
          this.props.options.map(option => {
            return <Option key={option} optionText={option} />
          })
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddoption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option) {
      alert(option)
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddoption}>
          <input type='text' name='option' />
          <button>Submit Data</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))