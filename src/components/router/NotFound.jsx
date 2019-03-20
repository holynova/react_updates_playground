import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './NotFound.scss';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>404 NotFound</div>
    );
  }
}
NotFound.propTypes = {};
NotFound.defaultProps = {};
export default NotFound;
