import React, { ReactElement, Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CourseType } from '../Interfaces'
import gql from 'graphql-tag';
import Course from './Course';
import { NavLink } from 'react-router-dom';
import {ExpansionPanel ,ExpansionPanelSummary ,ExpansionPanelDetails ,Typography ,List,ListItem, makeStyles} from '@material-ui/core';
import {GET_COURSES, GET_COURSES_BY_FACULTY_ID } from '../Query'

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ClassIcon from '@material-ui/icons/Class';

interface CourseListData {
    courses: CourseType[];
}
  
interface CourseListVars {

}

interface Props {
    
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function CourseList(props: Props): ReactElement {
    const classes = useStyles()

    const role=localStorage.getItem('role')
    const id=localStorage.getItem('id')
    const QERUY=role=='USER'?GET_COURSES_BY_FACULTY_ID:GET_COURSES
    console.log(QERUY)
    const{loading,data}= useQuery<CourseListData,CourseListVars>(QERUY,{variables:{id:id}});
    return (
        <div>
        {loading ? (
            <p>Loading ...</p>
          ) : (
            <Fragment>
              <Typography variant="h6" className={classes.title}>
                Course List
              </Typography>
              <div className={classes.demo}>
                <List>
                  {data && data.courses.map(course => (
                    <ListItem key={course.id} className="course-list" button component={NavLink} to={"/course/"+course.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <ClassIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={course.id}
                        secondary={course.name}
                      >
                      </ListItemText>
                    </ListItem>
                    ))
                  }
                </List>
              </div>

            {/* course list
            <List>
              {data && data.courses.map(course => (
                <ListItem key={course.id} className="course-list"> 
                  <NavLink to={"/course/"+course.id}> {course.name}</NavLink>
                </ListItem>
              ))}
            </List> */}
            </Fragment>
          )}
        </div>
    )
}
