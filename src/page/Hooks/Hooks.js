
import React, {Component} from 'react';
import ClassCount from './ClassCount';
import HooksCount from './HooksCount';
import './Hooks.scss'
class Hooks extends Component {
 
  render() {
    return (
      <div className='hooks'>
        <div><h2>class</h2><ClassCount /></div>
        <div><h2>hooks</h2><HooksCount /></div>
      </div>
    );
  }
}
export default Hooks