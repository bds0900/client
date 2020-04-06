import React, { Fragment, ReactElement } from 'react'
import { AppBar, Tabs, Tab, Box,Typography,makeStyles,Breadcrumbs,Chip, Button, Icon } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Role } from './Interfaces';


import {  } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import GroupAddTwoToneIcon from '@material-ui/icons/GroupAddTwoTone';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

interface Props {
  history:any
  isAuthenticated: boolean;
  userHasAuthenticated: (authenticated: boolean) => void;
}



const useStyles = makeStyles((theme) => ({
  root:{
    textDecoration:'none',
    display: 'flex',
  },
  avtive: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    textDecoration:'none'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0',
    marginLeft: '5px',
    ...theme.mixins.toolbar,
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,

  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  sidebarIcon: {
    height: 24,
  }
}));

const drawerWidth = 240;


const Nav = (props: Props):ReactElement => {
    const classes = useStyles();
    const role=localStorage.getItem("role");
    console.log("role:"+role)

    const handleLogout =  () => {
      props.userHasAuthenticated(false);

      localStorage.clear()
    }
    
    // for ui
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
    role==Role.SUPERADMIN
        ?
        <Fragment>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={classes.appBarShift}>
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="drawer"
                  className={clsx(classes.menuButton, classes.menuButtonHidden)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  Dashboard
                </Typography>
                <Button color="inherit" component={NavLink} to="/" onClick={handleLogout}>
                  Log Out
                  <Icon className={classes.toolbarIcon}>
                    <ExitToAppIcon/>
                  </Icon>
                </Button>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.toolbarIcon}>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    System
                </Typography>
              </div>
              <Divider />
              <List>
                  <div>
                    <ListItem button component={NavLink} to="/programs">        
                      <ListItemIcon className={classes.sidebarIcon}>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Programs" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/create/program">
                      <ListItemIcon>
                        <AddBoxOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Add Program" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/courses"> 
                      <ListItemIcon>
                        <LibraryBooksOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Courses" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/create/course">  
                      <ListItemIcon>
                        <QueueOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Add Course" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/students">     
                      <ListItemIcon>
                        <PeopleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Student" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/create/student">  
                      <ListItemIcon>
                        <GroupAddIcon />
                      </ListItemIcon>
                      <ListItemText primary="Add Student" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/faculties">  
                      <ListItemIcon>
                        <PeopleAltTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText primary="Faculty" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/create/faculty">
                      <ListItemIcon>
                        <GroupAddTwoToneIcon />
                      </ListItemIcon>
                      <ListItemText primary="Add Faculty" />
                    </ListItem>
                  </div>
              </List>
            </Drawer>
            <main className={ classes.content }>
              <div className={ classes.appBarSpacer}>
                <Container maxWidth="lg" className={ classes.container }>
                  
                </Container>
              </div>

            </main>
          </div>
        {/* <Breadcrumbs aria-label="breadcrumb">
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
        </Breadcrumbs> */} </Fragment>
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
