import React, { Fragment, ReactElement } from 'react'
import { Breadcrumbs, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Role } from './Interfaces';

interface Props {
  history:any
  isAuthenticated: boolean;
  userHasAuthenticated: (authenticated: boolean) => void;
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
const Nav = (props: Props):ReactElement => {
    const classes = useStyles();
    const role=localStorage.getItem("role");
    console.log("role:"+role)

    const handleLogout =  () => {
      props.userHasAuthenticated(false);

      localStorage.clear()
    }

    return (
    role==Role.SUPERADMIN
        ?
        <Fragment>

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
        <NavLink to="/" onClick={handleLogout}>Log out</NavLink>
        </Breadcrumbs>
        </Fragment>
        :
    role==Role.ADMIN
        ?
        <Fragment>
        <Breadcrumbs aria-label="breadcrumb">
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/home">Home</NavLink>
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/programs">Programs</NavLink>
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/courses">Courses</NavLink>
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/students">Students</NavLink>
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/faculties">Faculties</NavLink>
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/create/course">Add Course</NavLink>
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/create/student">Add Student</NavLink>
        <NavLink to="/" onClick={handleLogout}>Log out</NavLink>
        </Breadcrumbs>
        </Fragment>
        :
        <Fragment>
        <Breadcrumbs aria-label="breadcrumb">
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/home">Home</NavLink>
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/programs">Programs</NavLink>
        <NavLink activeClassName={classes.avtive} className={classes.root} to="/courses">Courses</NavLink>
        <NavLink to="/" onClick={handleLogout}>Log out</NavLink>
        </Breadcrumbs>
        </Fragment>
    )
}

export default Nav
