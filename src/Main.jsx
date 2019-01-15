import React, { Component } from 'react';
import propTypes from 'prop-types';
import App from './components/demo/App';
// import { } from 'antd';
// import './Main.less';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() { }
  // componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>
        <h1>Main</h1>
        <App></App>

      </div>
    );
  }
}
Main.propTypes = {};
Main.defaultProps = {};
export default Main;
