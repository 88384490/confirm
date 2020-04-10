import React, {Component} from "react";
import ReactDom from "react-dom";
import './Index.css';
import {Button} from "antd";

/**
 * 要做好一个组件，首先要设计功能，写伪代码
 */

class index extends Component{
  render () {
    return(
      <div id={'index'}>
        {/*
          initial render
          constructor
          componentWillMopunt
          render
          compontDidMount
        */}
        {/*
          存在期
        */}
        {/*
          销毁期间
        */}
        <h1>222222</h1>
        <Son1 id={1} 
        time={8}
        onWakeUp={() => {
          alert('wake up')
        }}
        onSleep={() => {
          alert('sleep')
        }}
        />
        <Son2/>
        <Button>确定</Button>
      </div>
    )
  }
  componentDidMount () {
    console.log('App')
  }
}

class Son1 extends Component {
  constructor (props) {
    super(props);
    let {onWakeUp, onSleep, time} = this.props
    this.state = {
      name: 'son1',
      id: props.id
    }
    if (time === 9) {
      onWakeUp()
    }
    if (time === 22) {
      onSleep()
    }
  }
  render () {
    let {name, id} = this.state
    return (
      <div>
        <ol>
          <li>{name}</li>
          <li>{id}</li>
          <li>2</li>
        </ol>
      </div>
    )
  }
  componentDidMount () {
    console.log('son1');
  }
}

class Son2 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'son2'
    };
  }
  render () {
    return (
      <div>son2</div>
    )
  }
  componentDidMount () {
    console.log('son2')
  }
}
export default index;