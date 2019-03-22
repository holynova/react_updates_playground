import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './TestState.scss';

class TestState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
      timerCnt: 0
    };
  }
  componentDidMount() {
    this.setState({
      cnt: this.state.cnt + 1
    })
    this.setState({
      cnt: this.state.cnt + 1
    })
    this.setState({
      cnt: this.state.cnt + 1
    })

    setTimeout(() => {

      this.setState({
        timerCnt: this.state.timerCnt + 1
      })
      this.setState({
        timerCnt: this.state.timerCnt + 1
      })
      this.setState({
        timerCnt: this.state.timerCnt + 1
      })
    }, 1000)

  }
  // componentWillReceiveProps(nextProps) { }

  render() {
    const { cnt, timerCnt } = this.state
    return (
      <div>TestState
        <h1>{`cnt:${cnt}`}</h1>
        <h1>{`timerCnt:${timerCnt}`}</h1>
      </div>
    );
  }
}
TestState.propTypes = {};
TestState.defaultProps = {};
export default TestState;
