import React, { useState } from 'react';
import './Hooks.scss'

function HooksCount() {
  const [count, setCount] = useState(0);
  const log = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(count);
    }, 3000);
  };

  return (
    <div className='HooksCount'>
      <p>Click {count} times</p>
      <button onClick={log}>Click me</button>
      <h5>
        useState 产生的数据也是可变的，通过数组第二个参数 Set 一个新值后，原来的值会形成一个新的引用在下次渲染时。<br />
        但由于对 state 的读取没有通过 this. 的方式，使得 每次 setTimeout 都读取了当时渲染闭包环境的数据，虽然最新的值跟着最新的渲染变了，但旧的渲染里，状态依然是旧值。<br />
        快速点击两次，输出的分别为1，2
      </h5>
    </div>
  );
}
export default HooksCount