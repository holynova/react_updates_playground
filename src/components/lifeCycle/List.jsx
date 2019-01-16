import React, { Component, PureComponent, Fragment } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './List.scss';

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <Fragment>List
        <ul>
          {
            this.props.list.map(o => <li key={o} >{o}</li>)
          }
        </ul>
      </Fragment>
    );
  }
}
List.propTypes = {};
List.defaultProps = {};
export default List;
