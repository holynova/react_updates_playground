import React, { Component } from 'react';
import propTypes from 'prop-types';
import Father from './Father';
// import { } from 'antd';
// import './Context .scss';
import ColorContext from './colorCotext.js'
// const ColorContext = React.createContext('red')

class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>Context
        <ColorContext.Provider value={{ front: 'yellow', back: '#f60' }} >
          <Father></Father>
          {/* <ColorContext.Consumer> */}
          {/* {value => <Father context={value} ></Father>} */}
          {/* <div>
            <Father />
          </div> */}

          {/* </ColorContext.Consumer> */}
        </ColorContext.Provider>
      </div>
    );
  }
}
Context.propTypes = {};
Context.defaultProps = {};
export default Context;
