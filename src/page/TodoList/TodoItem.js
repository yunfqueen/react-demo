import React from 'react';

// 父组件通过属性的形式向子组件传递参数
// 子组件通过props接受父组件传递过来的参数
// 子组件如果要和父组件通信，子组件要调用父组件传递过来的方法
class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.onDelItem = this.onDelItem.bind(this);
    }
    onDelItem(){
        this.props.onDel(this.props.index)
    }
    render(){
        return <li onClick={this.onDelItem}>{this.props.content}</li>
    }
}

export default TodoItem