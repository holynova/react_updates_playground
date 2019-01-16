import React, { Component } from 'react';
// import propTypes from 'prop-types';
// // import { } from 'antd';
// // import './ForwardInput.scss';

// class ForwardInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() { }
//   componentWillReceiveProps(nextProps) { }
//   render() {
//     return (
//       <div>ForwardInput
//         <input></input>
//       </div>
//     );
//   }
// }
// ForwardInput.propTypes = {};
// ForwardInput.defaultProps = {};
// export default ForwardInput;

export default React.forwardRef((props, ref) => {
  return (
    <div>ForwardInput
      {/* <button ref={ref} >button</button> */}
      <input ref={ref}></input>
    </div>
  )
})
