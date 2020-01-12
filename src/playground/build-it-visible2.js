class Visibility extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: true
    }
    this.handleVisibility = this.handleVisibility.bind(this)
  }

  handleVisibility() {
    console.log('Button clicked')
    this.setState((prevState)=> {
      return {
        visibility : !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.handleVisibility}>{this.state.visibility === true ? 'Hide element' : 'Unhide element'}</button>
        {
          this.state.visibility && (
            <div>
              <p>This data is being shown.</p>
            </div>
          )
        }
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))