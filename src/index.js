import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import TodoList from './page/TodoList/TodoList';
import Hooks from './page/Hooks/Hooks';
import App from './page/App';

class Index extends React.Component {
	render(){
		return(
      <Router >
        <div>
          <Route path="/App" component={App} />
          <Route path="/TodoList" component={TodoList}/>   
          <Route path="/Hooks" component={Hooks}/>
          <Link to="/App">
            <div onClick={this.gotoTodoList}>App</div>
          </Link>                                                                                                                                                                                                                                                                                                                                                                                                                                     
        </div>
      </Router>
		)
		}
  }
ReactDOM.render(<Index />, document.getElementById('root'));
