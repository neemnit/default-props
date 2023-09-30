import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    const{name,marks}=this.props
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>your have secureed{marks}</p>
      </div>
    )
  }
}
