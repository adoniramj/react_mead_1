const obj = {
  name: 'Adoniram',
  getName() {
    return this.name
  }
}

console.log(obj.getName())
let getName = obj.getName /* The transfer of 'this' does not occur. That is why
console.log(getName()) will produce the error -> cannot access the property 'name' of undefined because this is undefined.*/
//console.log(getName())
/*To fix this problem we can use the bind method*/

getName = obj.getName.bind(obj)

console.log(getName())
/*You can also bind on in-line object*/

getName = obj.getName.bind({name: 'Mike'})
console.log(getName())

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

  constructor(props) {
    super(props) //to have access to this.props
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }
  
  handleRemoveAll() {
    console.log(this.props.options)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handleRemoveAll.bind(this)}>Remove all options</button>
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