import { Component } from 'react';
import './App.css'
import Tricks from './Tricks';
import { getTricks, postTrick } from '../../ApiCalls';
import Form from './Form';


class App extends Component {

  constructor() {
    super()
    this.state = {
        tricks: []
    }
}

handler = (value) => {
  var newArray = this.state.tricks.slice();  
  newArray.push(value)
  this.setState({
    tricks: newArray
  })
}

componentDidMount() {
    getTricks()
    .then(data => this.setState({ tricks: data}))
}

submitAppForm(data) {
  postTrick(data)
  this.state.tricks.push(data)
}

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form handler = {this.handler}/>
        <Tricks tricks={this.state.tricks} handler = {this.removeHandler}/>
      </div>
    );
  }
}

export default App;