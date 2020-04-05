
import {TextField,Button,FormControl} from '@material-ui/core'
import { Redirect } from 'react-router-dom';
// import { FormGroup, FormControl, ControlLabel, Button, Glyphicon } from "react-bootstrap";
//import { Auth } from "aws-amplify";
import React, { ReactElement, ReactComponentElement, useState } from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../Query';
import { FacultyType } from '../Interfaces';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`


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
interface LoginVars {
  email: string;
  password: string;
}

interface authPayloadType {
  faculty: FacultyType;
  token: string;
}
interface LoginData{
  login: authPayloadType
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
  const [login, { error, data }] = useMutation<LoginData, LoginVars>(
    LOGIN,
    {variables:{email: email, password: password}}
  )
  //if get the data then save it
  if(data && data.login.token!=="Unable to login")
  {
    props.userHasAuthenticated(true);
    localStorage.setItem('token',data.login.token)
    localStorage.setItem('role',data.login.faculty.status)
  }
    return (
      <div>
      {error ? <p>Oh no! {error.message}</p> : null}
      {data && data.login.token!=="Unable to login"
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
            <Button color="primary" variant="text" onClick={()=>login()}
            disabled={passwordValid !== 'success' || emailValid !== 'success' }>Log in</Button>
         </div>
      </div>

      }
    </div>
    );
  
}
