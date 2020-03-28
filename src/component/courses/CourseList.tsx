import React, { ReactElement, Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CourseType } from '../Interfaces'
import gql from 'graphql-tag';
import Course from './Course';
import { NavLink } from 'react-router-dom';

const GET_COURSES = gql`
  {
    courses {
      id
      name
    }
  }
`;
interface CourseListData {
    courses: CourseType[];
}
  
interface CourseListVars {

}

interface Props {
    
}

export default function CourseList(props: Props): ReactElement {
    const{loading,data}= useQuery<CourseListData,CourseListVars>(GET_COURSES);
    return (
        <div>
        {loading ? (
            <p>Loading ...</p>
          ) : (
            <Fragment>
            {"course list.."}
            {data && data.courses.map(course => (
                <li key={course.id} className="course-list"> 
                    <NavLink to={"/course/"+course.id}> {course.name}</NavLink>
                </li>
            ))}
            </Fragment>
          )}
        </div>
    )
}