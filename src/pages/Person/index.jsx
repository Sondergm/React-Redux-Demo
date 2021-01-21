import React, { Component } from 'react'

export default class Person extends Component {

  state = {
    name: "",
    age: 0,
  }

  // 名字输入框受控
  handleInputName = e => {
    this.setState({ name: e.target.value })
  }

  // 年龄输入框受控
  handleInputAge = e => {
    this.setState({ age: e.target.value })
  }

  addPerson = () => {
    const { name, age } = this.state
    this.props.addPerson({name, age})
  }

  render() {
    return (
      <div>
        <h2>Person组件，Count组件和为{this.props.count}</h2>
        <div>
          姓名：<input onChange={this.handleInputName} type="text"/> &nbsp;
          年龄：<input onChange={this.handleInputAge} type="text"/> &nbsp;
          <button onClick={this.addPerson}>添加</button>
        </div>
        <div>
          <ul>
            {this.props.person.map((person, index)=> <li key={index}>{person.name}---{person.age}</li> )}
          </ul>
        </div>
      </div>
    )
  }
}
