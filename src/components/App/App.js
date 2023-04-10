import { Component } from 'react';
import './App.css'
import Tricks from './Tricks';
import getTricks from '../../ApiCalls';


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

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;