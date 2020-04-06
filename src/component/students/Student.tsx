import React, { ReactElement, Fragment, useState } from 'react'
import { StudentType,AttendanceSubscriptionPayload } from '../Interfaces'
import { useQuery,useSubscription } from '@apollo/react-hooks'
import  gql  from 'graphql-tag';

import {List,ListItem,Collapse,Typography, Button} from '@material-ui/core';
import UpdateStudent from './UpdateStudent'

import Attendance from '../attendances/Attendance';
import { GET_ATTENDANCE, GET_STUDENT } from '../Query';

interface CheckIn{
    attendance:AttendanceSubscriptionPayload
}

interface StudentData{
    student:StudentType;
}
interface StudentVars{
    student_id:string
}

interface Props {
    match:any
}

export default function Student(props: Props): ReactElement {
    console.log(props.match.params.id)
    const{loading,data,refetch}=useQuery<StudentData,StudentVars>(
        GET_STUDENT,
        {variables:{student_id:props.match.params.id}}
    )
    const sub=useSubscription<CheckIn>(GET_ATTENDANCE);
    if(!sub.loading) refetch()
    const [open, setOpen] = useState(true);
    const [update,setUpdate]=useState(false);
    const role = localStorage.getItem('role')
    return (
        <div>
        {
        update 
            ? 
        (data && <UpdateStudent student={data.student}></UpdateStudent>) 
            : 
        (
            <Fragment>
            <Typography variant="h5" gutterBottom>
                Student ID: {data && data.student.id}
            </Typography>
            <Typography variant="h5" gutterBottom>
               Name: {data && data.student.firstName} {data && data.student.LastName}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Email: {data && data.student.email}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Status: {data && data.student.status}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Program: {data && data.student.program.name}
            </Typography>

            {role!=='USER'? 
                <div>
                Enrolled Course List
                {data && data.student.enrollments.map(enrollment=>(
                    
                    <List>
                        <ListItem button onClick={()=>(setOpen(!open))} >
                            {enrollment.course.name}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List>
                            {enrollment.course.attendances.map(att=>(
                                <ListItem >{att.time}</ListItem>
                            ))}
                            </List>
                        </Collapse>
                    </List>
                    
                ))}
                <Button onClick={()=>setUpdate(!update)}>Update</Button>
                </div>

                :
                
                <div/>
            }
                
            

            </Fragment>
          )
        }
        </div>
    )
}
