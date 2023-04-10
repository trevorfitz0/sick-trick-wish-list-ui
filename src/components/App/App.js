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
        <Form tricks={this.state.tricks}/>
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;