import React, { ReactElement, Fragment, useState } from 'react'
import { StudentType,AttendanceSubscriptionPayload, FacultyType } from '../Interfaces'
import { useQuery,useSubscription } from '@apollo/react-hooks'
import  gql  from 'graphql-tag';

import {List,ListItem,Collapse,Typography, Button, TableContainer, Paper, Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';
import UpdateFaculty from './UpdateFaculty'

import { GET_FACULTY } from '../Query';
import {GET_ATTENDANCE_SUB}from '../Subscription'
import Class from '../classes/Class';

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

export default function Faculty(props: Props): ReactElement {
    console.log(props.match.params.id)
    const{loading,data,refetch}=useQuery<FacultyData,FacultyVars>(
        GET_FACULTY,
        {variables:{faculty_id:props.match.params.id}}
    )
    const sub=useSubscription<CheckIn>(GET_ATTENDANCE_SUB);
    if(!sub.loading) refetch()
    const [open, setOpen] = useState(true);
    const [update,setUpdate]=useState(false);

    return (
        <div>
        {loading
            ?
        <div>loading...</div>
            :
        update 
            ? 
        (data && <UpdateFaculty faculty={data.faculty}/>) 
            : 
        (
            data &&
            <Fragment>
            <Typography variant="h5" gutterBottom>
               Faculty ID: {data && data.faculty && data.faculty.id} 
            </Typography>
            <Typography variant="h5" gutterBottom>
               Faculty Name: {data && data.faculty && data.faculty.FirstName} {data && data.faculty && data.faculty.LastName}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Faculty Eamil: {data && data.faculty && data.faculty.email}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Faculty Status: {data && data.faculty && data.faculty.status}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Program: {data && data.faculty.program && data.faculty.program.name}
            </Typography>

            {data && data.faculty && data.faculty.instructings && data.faculty.instructings.map(instructing=>(
                
                <List>
                    <ListItem button onClick={()=>(setOpen(!open))} >
                        {instructing.course.name}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List>
                        {instructing.course.classes.map(clas=>(
                            <ListItem ><Class class={clas}/></ListItem>
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
