
import React, {Component} from 'react';
import './Hooks.scss'
class ClassCount extends Component {
  state = { count: 0 };

  log = () => {
    this.setState({
      count: this.state.count + 1
    });
    setTimeout(() => {
      console.log(this.state.count);
    }, 3000);
  };

  render() {
    return (
      <div className='classCount'>
        <p>Click {this.state.count} times</p>
        <button onClick={this.log}>Click me</button>
        <h5>
          state 是可变的，setState 后一定会生成一个全新的 state 引用。<br />
          Class Component 通过 this.state 方式读取 state，这导致了每次代码执行都会拿到最新的 state 引用，<br />
          快速点击两次，输出的两次都为2
        </h5>
      </div>
    );
  }
}
export default ClassCount