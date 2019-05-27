import React from 'react';
import { Link } from 'react-router-dom';
import  "./App.scss";
class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <h2>React相关</h2>
        <Link to="/TodoList">
          <div>todoList</div>
        </Link>
        <Link to="/Hooks">
          <div>Hooks</div>
        </Link>
      </div>
    );
  }
}

export default App;
