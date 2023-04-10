import React, { Component } from 'react'
import './Form.css'
import { getTricks, postTrick } from '../../ApiCalls'


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

    submitAppForm() {
        const newTrick = { 
                stance: this.state.stance, 
                name: this.state.name, 
                obstacle: this.state.obstacle, 
                tutorial: this.state.tutorial,
                id: Math.floor(Math.random() * 1000)
            }

            postTrick(newTrick)

    }

  render() {
    return (
        <div className='form'>
            <input placeholder='Trick Name' type='text' className='form-element' onInput={(e) => this.setState({ name: e.target.value})}></input>
            <select className='form-element' onChange={(e) => this.setState({ stance: e.target.value})}>
                <option value="regular">Stance Type</option>
                <option value="regular">Regular </option>
                <option value="switch">Switch</option>
            </select>
            <select className='form-element' onChange={(e) => this.setState({ obstacle: e.target.value})}>
                <option value="Flatground">Select an obstacle</option>
                <option value="Flatground">Flatground</option>
                <option value="Ledge">Ledge</option>
                <option value="Rail">Rail</option>
                <option value="Stairs">Stairs</option>
                <option value="Pool">Pool</option>
            </select>
            <input placeholder='Tutorial Video' className='form-element' onInput={(e) => this.setState({ tutorial: e.target.value})}></input>
            <button onClick={() => this.submitAppForm()} className='form-element'>Submit</button>
        </div>
    )
  }
}
