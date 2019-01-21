import React, { Component } from 'react';
import propTypes from 'prop-types';
import Son from './Son';
// import { } from 'antd';
// import './Father.scss';
import { log } from '../../utils/debugTools';
import ColorContext from './colorCotext'


class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    log('father context', this.context)
    return (
      <div>
        Father
      <Son></Son>
      </div>)
    // return (
    //   <ColorContext.Consumer>
    //     {
    //       (val) => {
    //         log(val)
    //         return <div>
    //           Father
    //         <Son></Son>
    //         </div>
    //       }
    //     }
    //   </ColorContext.Consumer>

    // );
  }
}
Father.propTypes = {};
Father.defaultProps = {};
export default Father;
