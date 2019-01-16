import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Clock.scss';
import { log } from '../../utils/debugTools'
// const log = () => { }

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: this.props.cnt
    };
  }
  componentDidMount() { }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     cnt: nextProps.cnt
  //   })
  // }
  static getDerivedStateFromProps(nextProps, prevState) {
    // log('getDerivedStateFromProps')
    // log({ nextProps, prevState })
    return { cnt: nextProps.cnt }
  }

  render() {
    return (
      <div>Clock
        <div>{this.state.cnt}</div>
        <div>{this.props.cnt}</div>
      </div>
    );
  }
}
Clock.propTypes = {};
Clock.defaultProps = {};
export default Clock;
