class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer.'
    const options = ['Thing one', 'Thing two', 'Thing four']
    return (
      <div>
        <Header title={title} subtitle={subtitle}  />
        <Action />
        <Options options={options} title={title}/>
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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
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
  render() {
    return (
      <p>This is the add option</p>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))