import React ,{Component,Fragment, useState, PropsWithChildren, ReactElement}from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavLink, withRouter, Route } from "react-router-dom";
import {AppBar, Tabs, Tab, Box,Typography,makeStyles,Breadcrumbs,Chip  } from '@material-ui/core'
import { emphasize, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import {LockOpen,Person,Loyalty,Subject} from '@material-ui/icons'
import PropTypes from 'prop-types';
import { Routes } from "./Routes";
import client from './Client'
import Login from './component/signup/Login'
import ProgramList from './component/programs/ProgramList'
import './App.css';
import CourseList from './component/courses/CourseList';
import FacultyList from './component/faculties/FacultyList';
import StudentList from './component/students/StudentList';

import { Role } from './component/Interfaces';
import Nav from './component/Nav';

interface AppProps {
  history: any;
}




const useStyles = makeStyles({
  root:{textDecoration:'none'},
  avtive: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    textDecoration:'none'
  }
});

function App(props:AppProps): ReactElement<AppProps> {
  const classes = useStyles();
  const [isAuthenticated,setIsAuth]=useState(localStorage.getItem("role")?true:false)
  const [isAuthenticating,setIsAuth2]=useState(false)
  const [value,setValue]=useState(0)



  // async componentDidMount() {
    // try {
    //   if (await Auth.currentSession()) {
    //     this.userHasAuthenticated(true);
    //   }
    // }
    // catch(e) {
    //   if (e !== 'No current user') {
    //     alert(e);
    //   }
    // }
  
  //   setIsAuth2(false);
  // }
  const userHasAuthenticated = (authenticated: boolean) => {
    setIsAuth(authenticated);
  }

  const handleLogout = async () => {
    // await Auth.signOut();
  
    userHasAuthenticated(false);
    props.history.push("/login");
  }

  const handleChange = (event:React.ChangeEvent<{}>, newValue:number) => {
    setValue(newValue);
  };


  const showLoggedInBar = () => {
    const role=localStorage.getItem("role");
    console.log("role:"+role)
    if(role==Role.SUPERADMIN)
    {
      return <Fragment>

      <Breadcrumbs aria-label="breadcrumb">
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/home">Home</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/programs">Programs</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/courses">Courses</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/students">Students</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/faculties">Faculties</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/create/program">Add Program</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/create/course">Add Course</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/create/faculty">Add Faculty</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/create/student">Add Student</NavLink>
      <NavLink to="/login">Login</NavLink>
      </Breadcrumbs>
    </Fragment>
    }
    else if(role==Role.ADMIN)
    {
      return <Fragment>
      <Breadcrumbs aria-label="breadcrumb">
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/home">Home</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/programs">Programs</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/courses">Courses</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/students">Students</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/faculties">Faculties</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/create/course">Add Course</NavLink>
      <NavLink activeClassName={classes.avtive} className={classes.root} to="/create/student">Add Student</NavLink>
      <NavLink to="/login">Login</NavLink>
      </Breadcrumbs>
    </Fragment>
    }
    
  };


  const showLoggedOutBar = () => (
    <Fragment>
    <Breadcrumbs aria-label="breadcrumb">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
    </Breadcrumbs>

      
    </Fragment>
  );

  


  const childProps = {
    isAuthenticated: isAuthenticated,
    userHasAuthenticated: userHasAuthenticated
  };

  

    
  return (
    <div>
    <ApolloProvider client={client}>
    <div>
      {isAuthenticated ? <Nav/> : <Login isAuthenticated={childProps.isAuthenticated} userHasAuthenticated={childProps.userHasAuthenticated}/>}
      <Routes isAuthenticated={childProps.isAuthenticated} userHasAuthenticated={childProps.userHasAuthenticated} />
    </div>
    </ApolloProvider>
    </div>
  );
  
  
}

export default App;
