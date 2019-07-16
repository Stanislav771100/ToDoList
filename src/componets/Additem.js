
import './Additem.css'
import React, {Component} from 'react'

class AddItem extends Component {

    constructor (props){
        super(props)
        this.state = {
            value : ''
        }
    }
    checkInput = (e) => {
        this.setState({value: e.target.value})
        

    }


    render() {
        return(
            <div className='block-list'>
                <input  onChange = {this.checkInput}/> 
                <button onClick = {() => {this.props.addItem(this.state.value)}}> ADD </button>
            </div>
        ) 
    }
 
}

export default AddItem

