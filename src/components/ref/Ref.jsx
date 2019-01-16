import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Ref.scss';
import { log } from '../../utils/debugTools'
import MyInput from './MyInput';
import ForwardInput from './ForwardInput';

class Ref extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef()
    this.myInputRef = React.createRef()
    this.forwardInputRef = React.createRef()
  }
  componentDidMount() {
    this.inputRef.current.focus()
    this.inputRef.current.value = 999

    log(this.inputRef)

    this.myInputRef.current.focus()
    this.myInputRef.current.value = 123
    this.myInputRef.current.say('foo')

    // this.forwardInputRef.current.focus()
    this.myInputRef.current.value = 321
    log('forward ref', this.forwardInputRef.current)
    this.forwardInputRef.current.value = 'sang'
    this.forwardInputRef.current.focus()
  }

  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>
        Ref
        <input ref={this.inputRef} ></input>
        <MyInput ref={this.myInputRef} ></MyInput>
        <ForwardInput ref={this.forwardInputRef} ></ForwardInput>
      </div>
    );
  }
}
Ref.propTypes = {};
Ref.defaultProps = {};
export default Ref;
