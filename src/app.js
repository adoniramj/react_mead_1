class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
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

  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer.'
    return (
      <div>
        <Header 
          title={title} 
          subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          pickOption={this.handlePick} />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption />
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
          disabled={!this.props.hasOptions} 
          onClick={this.props.pickOption}>What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handleDeleteOptions}>Remove all options
        </button>
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