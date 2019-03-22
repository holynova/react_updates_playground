import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
import './Nav.scss';
import { Link, NavLink } from 'react-router-dom'
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.styles = {
    //   active: {
    //     backgroundColor: 'grey'
    //   }
    // }
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div className='Nav' >
        Nav
          <ul>
          <li><NavLink activeClassName='activeNav' to='/home' >home</NavLink> </li>
          <li><NavLink activeClassName='activeNav' to='/about' >about</NavLink> </li>
          <li><NavLink activeClassName='activeNav' to='/blog' >blog</NavLink> </li>
          <li><NavLink activeClassName='activeNav' to='/foo' >foo</NavLink> </li>
          {/* {/* <li><Link activeClassName={this.styles.active} to='/home' >home</Link> </li> */}
        </ul>

      </div>
    );
  }
}
Nav.propTypes = {};
Nav.defaultProps = {};
export default Nav;
