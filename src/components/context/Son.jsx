import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Son.scss';
import { log } from '../../utils/debugTools'
import ColorContext from './colorCotext'

class Son extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    // log('son context', this.context)
    // return <div style={{ backgroundColor: this.context }} >Son</div>
    return (
      <ColorContext.Consumer>
        {
          val => <div style={{ backgroundColor: val }} >Son</div>
        }
      </ColorContext.Consumer>
    );
  }
}
Son.propTypes = {};
Son.defaultProps = {};
export default Son;
