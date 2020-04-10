import React, { useState, useEffect, useContext } from 'react';
import { render, hydrate } from "react-dom";

function Confirm (props) {
  const [ message, setMessage ] = useState('加载弹框');

  useEffect(() => {
    setMessage(props.message)
  });
  return (
    <div>
      <div class={'confirm-text'}>
        {message}
      </div>
      <div className={'confirm-foot'}>
        <span>确认</span>
        <span>取消</span>
      </div>
    </div>
  )
}

function confirm (message) {
  return new Promise((resolve, reject) => {
    // 创建dom节点
    let node = document.createElement('div');
    // 添加class名, 用于确认是否加载成功
    node.classList.add('confirm');
    // 加载到上一级dom中
    document.getElementById('main').appendChild(node);
    hydrate(<Confirm message={message}/>, node, () => {
      let confirmName = document.getElementsByClassName('confirm');
      if (confirmName.length) {
        resolve(true);
      } else {
        resolve(false);
      }
    })
  })
}

export default confirm;
