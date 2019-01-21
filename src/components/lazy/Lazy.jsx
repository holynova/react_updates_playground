import React, { Component, lazy, Suspense } from 'react';
import propTypes from 'prop-types';
import { delay } from '../../utils/debugTools'
// import Son from './LasySon.jsx'
const LazySon = lazy(() => import('./LasySon.jsx'))
// import { } from 'antd';
// import './Lazy.scss';

class Lazy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    // delay()
    return (
      <div>
        <h3>
          Lazy
        </h3>
        <Suspense fallback={<div>Loading</div>} >
          <LazySon></LazySon>
        </Suspense>
      </div>
    );
  }
}
Lazy.propTypes = {};
Lazy.defaultProps = {};
export default Lazy;
