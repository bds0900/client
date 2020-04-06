import React, { ReactElement, Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CourseType } from '../Interfaces'
import gql from 'graphql-tag';
import Course from './Course';
import { NavLink } from 'react-router-dom';
import {ExpansionPanel ,ExpansionPanelSummary ,ExpansionPanelDetails ,Typography ,List,ListItem} from '@material-ui/core';
import {GET_COURSES, GET_COURSES_BY_FACULTY_ID } from '../Query'
interface CourseListData {
    courses: CourseType[];
}
  
interface CourseListVars {

}

interface Props {
    
}

export default function CourseList(props: Props): ReactElement {
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
            course list
            <List>
              {data && data.courses.map(course => (
                <ListItem key={course.id} className="course-list"> 
                  <NavLink to={"/course/"+course.id}> {course.name}</NavLink>
                </ListItem>
              ))}
            </List>
            </Fragment>
          )}
        </div>
    )
}
