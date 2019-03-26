import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import ToDoListItem from './ToDoListItem';
// import { } from 'antd';
import './ToDoContainer.scss';
import { log } from '../../utils/debugTools'
import { Motion, TransitionMotion, spring, presets } from 'react-motion'

import ToDoListItem from './ToDoListItem.jsx'
class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: [
        { complete: false, time: 1, content: 'one' },
        { complete: false, time: 2, content: 'two' },
        { complete: false, time: 3, content: 'three' },
      ],
      filter: 'all'
    };
  }
  // componentDidMount() { }
  // componentWillReceiveProps(nextProps) { }
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

  onRadioChange = (e) => {
    this.setState({
      filter: e.target.value,
    })
  }

  renderFilter = (stateValue, key, options = []) => {
    return (
      <div className='filterPart' >
        {options.map(item => {
          // const {} = item 
          const props = {
            type: 'radio',
            name: key,
            checked: item === stateValue,
            onChange: this.onRadioChange,
            value: item,
          }
          return (
            <div key={item}>
              <input {...props}></input>
              <span>{item}</span>
            </div>)
        })}
      </div>
    )
  }
  renderToDoListItem = (item) => {
    const { time, content } = item
    const key = `${time}${content}`;
    const props = {
      ...item,
      key,
      onClick: this.toggleItem
    }
    return (
      <ToDoListItem {...props} >
      </ToDoListItem>
    )
  }

  renderItemPart = () => {
    let { items, filter } = this.state
    let filterdItems = items
    if (filter === 'complete') {
      filterdItems = items.filter(item => item.complete)
    } else if (filter === 'unfinished') {
      filterdItems = items.filter(item => !item.complete)
    }
    let res = 'no data, input to add one'
    if (Array.isArray(filterdItems) && filterdItems.length > 0) {

      res = filterdItems.map(this.renderToDoListItem)
    }
    let animationProps = {
      defaultStyle: { x: 1024 },
      style: {
        x: spring(0, presets.stiff)
      }
    }
    let transProps = {
      // TransitionStyle:{}
      styles: [],
      defaultStyles: [],

    }
    return (
      <Motion {...animationProps} >
        {({ x }) => (
          <div className="itemPart" style={{ marginLeft: `${x}px` }} >
            {res}
          </div>
        )}
      </Motion>
    )



  }
  render() {
    // const itemPart = (
    //   <div>
    //     {this.state.items.map(item => {
    //       const { time, content } = item
    //       const key = `${time}${content}`;
    //       const props = {
    //         ...item,
    //         key,
    //         onClick: this.toggleItem
    //       }
    //       return (
    //         <ToDoListItem {...props} >
    //         </ToDoListItem>)
    //     })}
    //   </div>
    // )
    // const filterPart = (
    //   <div>
    //     <input type='radio' name='filter' value='all'  ></input> <span>all</span>
    //     <input type='radio' name='filter' value='complete' ></input> <span>complete</span>
    //     <input type='radio' name='filter' value='unfinished'  ></input> <span>unfinished</span>
    //   </div>
    // )
    const itemPart = this.renderItemPart()
    const filterPart = this.renderFilter(this.state.filter, 'filter', ['all', 'complete', 'unfinished'])
    const inputPart = (
      <div className='inputPart'>
        <input type='text'
          value={this.state.inputValue}
          onChange={this.onInputChange}
          onKeyPress={this.onInputKeypress}
        ></input>
        <button onClick={this.create} >add</button>
      </div>
    )
    return (

      <div className='ToDoContainer' >
        {inputPart}
        {filterPart}
        {/* {this.state.filter} */}
        {itemPart}

      </div>
    );
  }
}
ToDoContainer.propTypes = {};
ToDoContainer.defaultProps = {};
export default ToDoContainer;
