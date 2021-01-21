import React, { Component } from 'react'

export default class Count extends Component {

  state = {
    value: "1",
  }

  // 选择组件受控
  selectValue = e => {
    this.setState({
      value: e.target.value,
    })
  }

  // 加
  add = () => {
    const { value } = this.state
    this.props.add(value * 1)
  }

  // 减
  minus = () => {
    const { value } = this.state
    this.props.minus(value * 1)
  }

  // 如果当前和是奇数时再加
  addIfOdd = () => {
    const { value } = this.state
    const { count } = this.props
    if (count % 2 !== 0) this.props.add(value * 1)
  }

  // 异步加
  addAsync = () => {
    const { value } = this.state
    this.props.addAsync(value * 1, 500)
  }

  render() {
    const { value } = this.state
    const { count } = this.props
    return (
      <div>
        <h2>当前求和为：{count}</h2>
        <select name="num" id="num" defaultChecked={value} onChange={this.selectValue}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;<button onClick={this.add}>+</button>
        &nbsp;<button onClick={this.minus}>-</button>
        &nbsp;<button onClick={this.addIfOdd}>+ if sum is odd</button>
        &nbsp;<button onClick={this.addAsync}>async add</button>
      </div>
    )
  }
}
