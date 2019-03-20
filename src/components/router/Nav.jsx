import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Nav.scss';
import { Link } from 'react-router-dom'
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>Nav
          <ul>
          <li><Link to='/home' >home</Link> </li>
          <li><Link to='/about' >about</Link> </li>
          <li><Link to='/blog' >blog</Link> </li>
          {/* {/* <li><Link to='/home' >home</Link> </li> */}
        </ul>

      </div>
    );
  }
}
Nav.propTypes = {};
Nav.defaultProps = {};
export default Nav;
