import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './MyInput.scss';
import { log } from '../../utils/debugTools'

class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef()
    this.focus = this.focus.bind(this)
  }
  focus() {
    this.ref.current.focus()
  }
  say = (name) => {
    log('my name is ' + name)
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>MyInput
        <input ref={this.ref} ></input>
      </div>
    );
  }
}
MyInput.propTypes = {};
MyInput.defaultProps = {};
export default MyInput;
