import React, { ReactElement, Fragment, useState } from 'react'
import { StudentType,AttendanceSubscriptionPayload, FacultyType } from '../Interfaces'
import { useQuery,useSubscription } from '@apollo/react-hooks'
import  gql  from 'graphql-tag';

import {List,ListItem,Collapse,Typography, Button} from '@material-ui/core';
import UpdateFaculty from './UpdateFaculty'

import Attendance from '../attendances/Attendance';
import { GET_ATTENDANCE, GET_STUDENT } from '../Query';

interface CheckIn{
    attendance:AttendanceSubscriptionPayload
}

interface FacultyData{
    faculty:FacultyType;
}
interface FacultyVars{
    faculty_id:string
}

interface Props {
    match:any
}

export default function Student(props: Props): ReactElement {
    console.log(props.match.params.id)
    const{loading,data,refetch}=useQuery<FacultyData,FacultyVars>(
        GET_STUDENT,
        {variables:{faculty_id:props.match.params.id}}
    )
    const sub=useSubscription<CheckIn>(GET_ATTENDANCE);
    if(!sub.loading) refetch()
    const [open, setOpen] = useState(true);
    const [update,setUpdate]=useState(false);

    return (
        <div>
        {
        update 
            ? 
        (data && <UpdateFaculty faculty={data.faculty}></UpdateFaculty>) 
            : 
        (
            <Fragment>
            {console.log(data)}
            <Typography variant="h5" gutterBottom>
                {data && data.faculty.firstName} {data && data.faculty.LastName}
            </Typography>
            <Typography variant="h5" gutterBottom>
                {data && data.faculty.email}
            </Typography>
            
            {data && data.faculty.instructings.map(instructing=>(
                
                <List>
                
                    <ListItem button onClick={()=>(setOpen(!open))} >
                        {instructing.course.name}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List>
                        {instructing.course.attendances.map(att=>(
                            <ListItem >{att.time}</ListItem>
                        ))}
                        </List>
                    </Collapse>
                </List>
                
            ))}

            
            <Button onClick={()=>setUpdate(!update)}>Update</Button>
            </Fragment>
          )
        }
        </div>
    )
}