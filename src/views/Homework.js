import React, { Component } from "react";


class Clock extends Component{
  constructor (props) {
    super(props);
    this.state = {
      time: props.time
    }
  }

  changeTime (e) {
    this.setState({
      time: e.target.value
    });
  }

  updatetime () {
    console.log(this)
  }

  render () {
    return (
      <div>
        <p>闹钟</p>
        <div>
          现在时间: <input value={this.state.time} type="text" onChange={this.changeTime.bind(this)}/>
          <button onClick={this.updatetime.bind(this)}>上传</button>
        </div>
      </div>
    );
  }
}

class Homework extends Component {
  constructor (props) {
    super(props);
    this.state = {
      time: ''
    }
  }

  changeTime (e) {
    this.setState({
      time: e.target.value
    })
    this.onWakeup();
    this.onSleep();
  }

  onWakeup () {
    if (this.state.wakeup === 7) {
      alert('起床');
    }
  }

  onSleep () {
    if (this.state.sleep === 22) {
      alert('睡觉');
    }
  }

  render () {
    return (
      <div>
        <Clock time={8} onTimeForChange={this.changeTime.bind(this)}/>
      </div>
    );
  }
}

export default Homework;