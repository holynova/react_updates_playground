import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './Router.scss';
import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Blog from './Blog.jsx'
import NotFound from './NotFound.jsx'
import Nav from './Nav.jsx'

// import Home from './Home.jsx'
class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>
        <h1>Router</h1>
        <BrowserRouter>
          <Nav></Nav>
          <Switch>
            <Route path='/home' component={Home} ></Route>
            <Route path='/about' component={About} ></Route>
            <Route path='/blog' component={Blog} ></Route>
            <Route path='/foo' render={() => (<div>foo</div>)} ></Route>
            <Route path='' component={NotFound} ></Route>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
Router.propTypes = {};
Router.defaultProps = {};
export default Router;
