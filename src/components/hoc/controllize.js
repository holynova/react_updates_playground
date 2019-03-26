import React, { Component } from 'react';

export default function controllize(Comp) {
  class ControlledComp extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: this.props.value
      }
      this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
      this.setState({
        value: e.target.value
      })
    }

    render() {
      <Comp value={this.state.value} onChange={this.onChange} ></Comp>
    }
  }
  return ControlledComp
}