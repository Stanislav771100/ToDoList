import React, {Component} from 'react'
import './Todolist.css'
import Additem from './Additem';
import Todoitem from './Todoitem';

class Todolist extends Component{
    
    constructor (props){
        super(props)
        this.state = {
            elements: []
        }
    }
    addItem = (value) => {
        let elements = this.state.elements
        elements.push(value)
        this.setState ({
            elements
        })
    }

    render(){
        return (
        <div>
            <div className="nav">
                <h1>To Do List</h1>
            </div>
          
           {this.state.elements.map((element)=>{
               return(
                   <div>
                       {element}
                   </div>
               )
           })}
        <Additem addItem = {(item) => { this.addItem(item)}} />
            </div>
        )
    }
}

export default Todolist