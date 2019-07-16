import React, {Component} from 'react'
import './Maintodo.css'
import Addlist from './Addlist';
import Todo from './Todo';

class Maintodo extends Component{
    
    
    render(){
    return (
    <div className="main">
        <div className="nav">
            <h1>To Do List</h1>
        </div>
        <Todo />
        <Addlist />
    </div>
    )
}
}

export default Maintodo