import React, { Component } from 'react'

export default class Stateclass extends Component {

    constructor(){
        super()
        this.state={
            name:"groot",
            city:"jaipur"
        }
    }

  render() {
    return (
      <div>
        <h1>State class component</h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.city}</h1>
      </div>
    )
  }
}
