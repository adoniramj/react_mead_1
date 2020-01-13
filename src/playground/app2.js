class Indecision extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this)
    this.state = {
      options: ['option 1', 'option 2']
    }
  }

  handleAddOption(option) {
    if(!option) {
      return 'Empty strings are not allowed.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already in the system'
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  handleDeleteAllOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  render() {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle} />
        <Action
          options={this.state.options.length === 0} />
        <Options 
          options={this.state.options}
          deleteAllOptions={this.handleDeleteAllOptions} />
        <AddOption
          handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )

  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={this.props.options}>
          What should I do?
      </button>
        <p>This is Action component</p>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.length > 0 ? <p>You have the following options</p> : <p>You do not have any options</p>
        }
        {this.props.options.map(option => {
          return (
            <Option key={option} optionText={option} />
          )
        })}
        <button onClick={this.props.deleteAllOptions}>Delete all options</button>
      </div>

    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>Option: {this.props.optionText}</p>
    )
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(()=> {
      return {
        error
      }
    })
    e.target.elements.option.value = ''
  }
  render() {
     return (
      <div>
        {this.state.error && (
          <p>{this.state.error}</p>
        )}
        <form onSubmit={this.handleAddOption}>
          <input
            type='text'
            autoComplete='off'
            name='option' />
          <button>Add new option</button>
        </form>
      </div>
    )
  }
}
ReactDOM.render(<Indecision />, document.getElementById('app'))
