import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './LifeCycle.scss';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>LifeCycle</div>
    );
  }
}
LifeCycle.propTypes = {};
LifeCycle.defaultProps = {};
export default LifeCycle;
