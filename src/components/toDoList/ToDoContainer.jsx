import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import ToDoListItem from './ToDoListItem';
// import { } from 'antd';
import './ToDoContainer.scss';
import { log } from '../../utils/debugTools'

import ToDoListItem from './ToDoListItem.jsx'
class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: [],
    };
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  create = () => {
    let content = this.state.inputValue
    if (!content) {
      return
    }
    this.setState(prevState => {
      let newOne = {
        complete: false,
        content: prevState.inputValue,
        time: new Date().getTime()
      }
      let items = [...prevState.items, newOne]
      return {
        inputValue: '',
        items,
      }
    })
  }
  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }
  onInputKeypress = (e) => {
    // log(e.key)
    if (e.key === 'Enter') {
      this.create()
    }
  }

  toggleItem = (key) => {
    // log(key)
    this.setState(prevState => {
      let changedIndex = -1
      let { items } = prevState
      for (let i = 0; i < items.length; i++) {
        let item = items[i]
        let curKey = `${item.time}${item.content}`
        if (key === curKey) {
          changedIndex = i
          break
        }
      }
      items[changedIndex].complete = !items[changedIndex].complete
      return {
        items,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>
          ToDoContainer
        </h1>
        <Fragment>
          <input type='text'
            value={this.state.inputValue}
            onChange={this.onInputChange}
            onKeyPress={this.onInputKeypress}
          ></input>
          <button onClick={this.create} >add</button>

        </Fragment>
        <ul>
          {this.state.items.map(item => {
            const { time, content } = item
            const key = `${time}${content}`;
            const props = {
              ...item,
              key,
              onClick: this.toggleItem
            }
            return (
              <ToDoListItem {...props} >
              </ToDoListItem>)
          })}
        </ul>

      </div>
    );
  }
}
ToDoContainer.propTypes = {};
ToDoContainer.defaultProps = {};
export default ToDoContainer;
