import React, { ReactElement, Fragment } from 'react'
import { useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag';
import { NavLink } from 'react-router-dom';
import { StudentType, FacultyType } from '../Interfaces';
import { GET_FACULTIES } from '../Query';
import { List } from '@material-ui/core';

interface FacultyListData {
    faculties: FacultyType[];
}
  
interface FacultyListVars {
    faculty_id:string;
}

interface Props {
    
}

export default function FacultyList(props: Props): ReactElement {
    const{loading,data}= useQuery<FacultyListData,FacultyListVars>(
        GET_FACULTIES
    );
    return (
        <div>
            Faculty list
            {loading ? (
                <p>Loading ...</p>
              ) : (
                <Fragment>
                {data && data.faculties.map(faculty => (
                    <List key={faculty.id} className="student-list"> 
                    <NavLink to={"/faculty/"+faculty.id}> {faculty.firstName} {faculty.LastName}</NavLink>
                    </List>
                ))}
                </Fragment>
              )}
        </div>
    )
}
