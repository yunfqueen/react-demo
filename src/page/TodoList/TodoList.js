import React from 'react';
import TodoItem from './TodoItem'
export default class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      list:['七月在野','八月在宇','九月在户','十月蟋蟀入我床下'],
      inputValue:''
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onDelItem = this.onDelItem.bind(this);
  }
// change
  onChangeInput(e){
    this.setState({
      inputValue:e.target.value
    })
  }
// add
  onAddClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
// detele
  onDelItem(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }
  render() {
    return (
      <div>
       <div>
         <input value={this.state.inputValue} onChange={this.onChangeInput} />
         <button onClick={this.onAddClick}>add</button>
       </div>
       <div>
         <ul>
          {
            this.state.list.map((item,index)=>{
              return <TodoItem key={index} content={item} index={index} onDel={this.onDelItem}/>
            })
          }
         </ul>
       </div>
      </div>
    );
  }
}