import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Ref.scss';
import { log } from '../../utils/debugTools'
import MyInput from './MyInput';

class Ref extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef()
    this.myInputRef = React.createRef()
  }
  componentDidMount() {
    this.inputRef.current.focus()
    this.inputRef.current.value = 999
    log(this.inputRef)
    this.myInputRef.current.focus()
    this.myInputRef.current.say('foo')
  }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>
        Ref
        <input ref={this.inputRef} ></input>
        <MyInput ref={this.myInputRef} ></MyInput>
      </div>
    );
  }
}
Ref.propTypes = {};
Ref.defaultProps = {};
export default Ref;
