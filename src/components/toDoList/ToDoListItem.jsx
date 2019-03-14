import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
import './ToDoListItem.scss';

class ToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.styles = {

    // }
  }

  handleClick = () => {
    const { content, time, onClick } = this.props
    let key = `${time}${content}`
    onClick && onClick(key)
  }

  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    const { complete, content } = this.props
    return (
      <div className={`ToDoListItem ${complete ? 'complete' : ''}`} onClick={this.handleClick} >
        <input type='checkbox' checked={complete} ></input>
        <span>{content}</span>
      </div>
    );
  }
}
ToDoListItem.propTypes = {};
ToDoListItem.defaultProps = {
  content: 'foo',
  complete: false,
  time: 0,
  onClick: () => {

  }

};
export default ToDoListItem;
