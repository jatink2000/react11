import React, { Component } from 'react'

export default class Propsclass extends Component {
  render() {
    return (
      <div>
        <h1>Props class component</h1>
        <h1>my name is {this.props.details.myname}</h1>
        <h1>my city name is {this.props.details.mycity}</h1>

        <h1>array first name: {this.props.allstudents[0]}</h1>
      </div>
    )
  }
}
