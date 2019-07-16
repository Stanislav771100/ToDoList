import React, {Component} from 'react'

class Button extends Component{
    constructor() {
        super()
        this.state = {
            text:true
        }
    }
    render(){
    return (
    <div>
    <button name="changeText" onClick={()=>{
        this.setState({
            text:!this.state.text
        })
    }}> {this.state.text? "text": "change text"} </button>
    </div>
    )
}
}

export default Button