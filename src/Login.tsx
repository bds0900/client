
import {TextField,Button,FormControl} from '@material-ui/core'
import { Redirect } from 'react-router-dom';
// import { FormGroup, FormControl, ControlLabel, Button, Glyphicon } from "react-bootstrap";
//import { Auth } from "aws-amplify";
import React from 'react'


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface LoginProps {
  isAuthenticated: boolean;
  userHasAuthenticated: (authenticated: boolean) => void;
}

interface LoginState {
  loading: boolean;
  redirect: boolean;
  email: string;
  password: string;
  emailValid: "success" | "error" | "warning" | undefined;
  passwordValid: "success" | "error" | "warning" | undefined;
}

export default class Login extends React.Component<LoginProps, LoginState>  {
    constructor(props:LoginProps){
      super(props);
      this.state = {
        loading: false,
        redirect: false,
        email: "",
        password: "",
        emailValid: undefined,
        passwordValid: undefined,
      };
    }


  onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    this.setState({
      email: target.value,
      emailValid: emailRegex.test(target.value.toLowerCase()) ? 'success' : 'error'
    });
  }

  onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    this.setState({
      password: target.value,
      passwordValid: target.value.length < 8 ? 'error' : 'success'
    });
  }

  onLogin = async (event: React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
    event.preventDefault();
    this.setState({ loading: true });

    // try {
    //   await Auth.signIn(this.state.email, this.state.password);
    //   this.props.userHasAuthenticated(true);
    //   this.setState({ redirect: true })
    // } catch (e) {
    //   alert(e.message);
    //   this.setState({ loading: false });
    // }
  }

  render() {
    if (this.state.redirect) return <Redirect to='/' />

    return (
      <div className="Login">
        
        <div>
           <TextField
             placeholder="Enter your Username"
             label="Username"
             value={this.state.email}
             onChange={this.onEmailChange}
             />
           <br/>
            <TextField
            type="password"
            placeholder="Enter your Password"
            label="Password"
            value={this.state.password}
            onChange={this.onPasswordChange}
            />
            <br/>
            <Button color="primary" variant="text" onClick={this.onLogin}
            disabled={this.state.passwordValid !== 'success' || this.state.emailValid !== 'success' }>Log in</Button>
         </div>
      </div>
    );
  }
}
