
import {TextField,Button,FormControl} from '@material-ui/core'
import { Redirect } from 'react-router-dom';
// import { FormGroup, FormControl, ControlLabel, Button, Glyphicon } from "react-bootstrap";
//import { Auth } from "aws-amplify";
import React, { ReactElement, ReactComponentElement, useState } from 'react'


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

export default function Login(props:LoginProps): ReactElement <LoginProps>  {

    const [loading,setLoading]=useState(false);
    const [redirect, setReirect] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValid, setEmailValid] = useState<"success" | "error" | "warning" | undefined>();
    const [passwordValid,setPasswrodValid] =useState<"success" | "error" | "warning" | undefined>();


  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setEmail(target.value)
    setEmailValid(emailRegex.test(target.value.toLowerCase()) ? 'success' : 'error')
  }

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
    setPasswrodValid(target.value.length < 8 ? 'error' : 'success')
    
  }

  const onLogin = async (event: React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
    event.preventDefault();
    setLoading( true );

    // try {
    //   await Auth.signIn(email, password);
    //   props.userHasAuthenticated(true);
    //   setReirect(true )
    // } catch (e) {
    //   alert(e.message);
    //   setLoading(false);
    // }
  }


    return (
      <div>
      {redirect
        ?
      <Redirect to='/' />
        :
      <div className="Login">
        <div>
           <TextField
             placeholder="Enter your Username"
             label="Username"
             value={email}
             onChange={onEmailChange}
             />
           <br/>
            <TextField
            type="password"
            placeholder="Enter your Password"
            label="Password"
            value={password}
            onChange={onPasswordChange}
            />
           <br/>
            <Button color="primary" variant="text" onClick={onLogin}
            disabled={passwordValid !== 'success' || emailValid !== 'success' }>Log in</Button>
         </div>
      </div>

      }
    </div>
    );
  
}
