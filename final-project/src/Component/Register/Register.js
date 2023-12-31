import React from "react";
import "./Register.css";

class Register extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }


  RegisterButton = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        name: this.state.name,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
        this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }


    render(){
    return(
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">    
        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlfor="name">name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={this.onNameChange}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlfor="password">Email</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email" onChange={this.onEmailChange}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlfor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
                </div>
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={this.RegisterButton}/>
                </fieldset>
            </form>
        </main>
    </article>
    )
    }
}

export default Register;