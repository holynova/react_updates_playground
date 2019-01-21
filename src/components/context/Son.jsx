import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Son.scss';
import { log } from '../../utils/debugTools'
import ColorContext from './colorCotext'

class Son extends Component {
  static contextType = ColorContext
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    log(this.contextType)
  }
  componentWillReceiveProps(nextProps) { }
  render() {
    log('son context', this.context)
    // return <div style={{ backgroundColor: this.context }} >Son</div>

    return (
      <div>
        <h1>调用方式一</h1>
        <div
          style={{
            backgroundColor: this.context.back,
            color: this.context.front
          }}>Son</div>
        <div>
          {`context = ${JSON.stringify(this.context)}`}
        </div>
        <hr />
        <h1>方式二</h1>
        <ColorContext.Consumer>
          {
            val => <div
              style={{
                backgroundColor: val.back,
                color: val.front
              }} >Son</div>
          }
        </ColorContext.Consumer>

      </div>
    );
  }
}
Son.propTypes = {};
Son.defaultProps = {};
// Son.contextType = ColorContext
export default Son;
