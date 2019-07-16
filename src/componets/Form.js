import React, {Component} from 'react'
import './Form.css'



class Form extends Component{

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phone: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }
  validateInput = (e) => {
    if (e.target.name === 'email'){
      console.log(e.target.value.indexOf('@') !==-1 && e.target.value.indexOf('.')!==-1)
      if (e.target.value.indexOf('@') !==-1 && e.target.value.indexOf('.')!==-1){
        this.setState({
          emailValid: true
        })
      } else {
        this.setState({
          emailValid: false
        })
        
      }
    }

  }
  render(){
  return (
<div className='mainForm'>
  <div className='mainCont'>
    <h2>E-mail</h2>
    <h3>{this.state.emailValid ? "":"not ok"}</h3>
    <input type='email' name='email' value={this.state.email}  onChange={this.handleUserInput}  onBlur={this.validateInput} />
    <h2>Password</h2>
    <input type='password' name='password' value={this.state.password} onChange={this.handleUserInput}  />
    <h2>Phone</h2>
    <input type='phone' name='phone' value={this.state.phone} onChange={this.handleUserInput} />

    <input type="button" value="click" />
    <div className='panel panel-default'>
    
</div>
  </div>
  </div>
  )
  }
}

export default Form