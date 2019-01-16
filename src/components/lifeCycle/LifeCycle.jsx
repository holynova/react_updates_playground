import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './LifeCycle.scss';
import { log as dLog } from '../../utils/debugTools'
import Clock from './Clock';
import List from './List';
const log = () => { }
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
      list: [1, 2, 3]
    };
    log('constructor')
  }
  componentWillMount() {
    log('will mount')
  }

  getDerivedStateFromProps(nextProps, prevState) {
    log('getDerivedStateFromProps')
    // log({ nextProps, prevState })
    // return { cnt: nextProps.cnt }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState, props) => {
        let now = new Date().getTime()
        // prevState.list.push(now)
        return {
          cnt: prevState.cnt + 1,
          list: [...prevState.list, now],
          // list: prevState.list
        }
      })
    }, 1000)
    log('did mount')
  }
  componentWillUpdate() {
    log('will update')
  }
  componentDidUpdate() {
    log('did Update')
  }
  shouldComponentUpdate() {
    log('should update')
    return true
  }
  componentWillReceiveProps(nextProps) {
    log('will reveive props', nextProps)
  }
  render() {
    return (
      <div>LifeCycle
        <Clock cnt={this.state.cnt}></Clock>
        <List list={this.state.list} ></List>
      </div>
    );
  }
}
LifeCycle.propTypes = {};
LifeCycle.defaultProps = {};
export default LifeCycle;
