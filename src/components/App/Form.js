import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {

    constructor() {
        super()
        this.state = {
            stance: '',
            obstacle: '',
            name: '', 
            tutorial: '',
        }
    }

    submitForm() {
        
    }

  render() {
    return (
        <div className='form'>
            <input value='Trick Name' className='form-element' onInput={(e) => this.setState({ name: e.target.value})}></input>
            <select className='form-element' onChange={(e) => this.setState({ stance: e.target.value})}>
                <option value = "regular">Regular </option>
                <option value = "switch">Switch</option>
            </select>
            <select className='form-element' onChange={(e) => this.setState({ obstacle: e.target.value})}>
                <option value = "Flatground">Flatground</option>
                <option value = "Ledge">Ledge</option>
                <option value = "Rail">Rail</option>
                <option value = "Stairs">Stairs</option>
                <option value = "Pool">Pool</option>
            </select>
            <input value='Tutorial Video' className='form-element' onInput={(e) => this.setState({ tutorial: e.target.value})}></input>
            <button onClick={() => this.submitForm()} className='form-element'>Submit</button>
        </div>
    )
  }
}
