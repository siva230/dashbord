import React from "react";
import "./Login.css";

class Login extends React.Component {
  state ={
    email:'',
    pwd:''
  }
  handleChange = (e) =>{
const {name,value} = e.target
this.setState({[name]:value})
  }
handleSubmit = (e) =>{

  }
  render() {
    return(
      <div className="login">
      <form className="loginForm">
        <h1>Login Form</h1>
        <input
          type="email"
          name ="email"
          placeholder="Eamil"
          required
          onChange={this.handleChange}
        />
        <input
          type="password"
          name='pwd'
          placeholder="Password"
          required
          onChange={this.handleChange}
        />
        <button type="submit" className="submitForm" onSubmit={this.handleSubmit}>
          Login
        </button>
      </form>
    </div>
    )
  };
};
export default Login;
