import React, { Component,useState, useEffect, useContext } from 'react';
import Confirm from './views/components/Confirm'
import './App.css';
import { hydrate } from "react-dom";


class Test extends React.Component {
  async componentDidMount () {
    let res = await Confirm('确定删除吗？')
    if (res) {
      console.log('加载成功')
    } else {
      console.log('加载失败')
    }
  }

  render () {
    return(
     <div id={'main'}>
       创建函数组件, 然后在confirm方法中使用React的hydrate方法进行渲染，在对调中查询是否挂载成功，如果成功则返回true。
     </div>
    )
  }
}


function App() {
  return (
    <div>
      <Test/>
    </div>
  );
}

export default App;
