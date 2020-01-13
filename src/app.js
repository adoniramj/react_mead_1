class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    let index = (Math.floor(Math.random() * this.state.options.length))
    alert(this.state.options[index])
  }

  handleAddOption(option) {
    if(!option) {
      return 'Empty strings are not allowed.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!'
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer.'
    return (
      <div>
        <Header 
          // title={title} 
          subtitle={subtitle} 
          />
        <Action 
          hasOptions={this.state.options.length > 0} 
          pickOption={this.handlePick} />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption addOption={this.handleAddOption}/>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Default title'
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.pickOption}>
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}>
        Remove all options
      </button>
      {
        props.options.map(option => {
          return <Option key={option} optionText={option} />
        })
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddoption = this.handleAddoption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddoption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.addOption(option)
    this.setState(() => {
      return { error }
    })
    e.target.elements.option.value = ''

  }
  render() {
    return (
      <div>
        {
          this.state.error && (
            <p>{this.state.error}</p>
          )
        }
        <form onSubmit={this.handleAddoption}>
          <input 
            type='text' 
            autoComplete='off' 
            name='option' />
          <button>Submit Data</button>
        </form>
      </div>
    )
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age: {props.age}</p>
    </div>
  )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))