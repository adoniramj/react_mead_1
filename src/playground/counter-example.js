// let count = 0
// let count2 =100
// const add = () => {
//   count++
//   count2++
//   console.log('Plus one')
//   renderData()
// }

// const minus = () => {
//   count--
//   console.log('Minus one')
//   renderData()
// }

// const reset = () => {
//   count = 0
//   conut2 = 100
//   console.log('Reset')
//   renderData()
// }

// const appRoot = document.getElementById('app')
// // The line above is JSX. The browser does not understand JSX. Using Babeljs.io, JSX was compiled to vanilla JS.
// // var template = React.createElement("h1", {
//   //   id: "someid"
//   // }, "This is JSX from App.js");
  
//   const renderData = () => {
//     const templateTwo = (
//       <div>
//       <h1>Count: {count}</h1>
//       <h1>Count: {count2}</h1>
//       <button
//       onClick={add}>+1
//       </button>
//       <button onClick={minus}>
//       -1
//       </button>
//       <button
//       onClick={reset}>reset
//       </button>
//       </div>
//       );
//     ReactDOM.render(templateTwo, appRoot)  
//  }

//  renderData()

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.handlePlusOne = this.handlePlusOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  handlePlusOne() {
    console.log('Plus one')
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne() {
    console.log('Minus one')
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset() {
    // this.setState(()=> {
    //   return {
    //     count: 0
    //   }
    // })

    this.setState({ count: 0})
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>plus 1</button>
        <button onClick={this.handleMinusOne}>minus 1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))