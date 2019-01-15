import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Ref.scss';

class Ref extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef()
  }
  componentDidMount() {
    this.inputRef.current.focus()
    this.inputRef.current.value = 999
  }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>
        Ref
        <input ref={this.inputRef} ></input>
      </div>
    );
  }
}
Ref.propTypes = {};
Ref.defaultProps = {};
export default Ref;
