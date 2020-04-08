import React, { ReactElement, Fragment, useState } from 'react'
import { StudentType,AttendanceSubscriptionPayload } from '../Interfaces'
import { useQuery,useSubscription } from '@apollo/react-hooks'
import  gql  from 'graphql-tag';

import {List,ListItem,Collapse,Typography, Button, makeStyles} from '@material-ui/core';
import UpdateStudent from './UpdateStudent'

import Attendance from '../attendances/SubscriptionAttendance';
import { GET_ATTENDANCE, GET_STUDENT } from '../Query';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider'

import Paper from '@material-ui/core/Paper';

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

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    table: {
      width: '40%'
    },
    marginTop:{
        marginTop: 20,
    }

  }));

export default function Student(props: Props): ReactElement {
    const classes = useStyles();
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
            <TableContainer component={Paper} className={classes.table}>
                <Table>
                  <TableRow>
                      <TableCell>
                        <Typography variant="h6">
                            Student ID :
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">
                            {data && data.student.id}
                        </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>
                        <Typography variant="h6">
                            Name :
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">
                            {data && data.student.firstName} {data && data.student.LastName}
                        </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>
                        <Typography variant="h6">
                            Program :
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">
                            {data && data.student.program.name}
                        </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>
                        <Typography variant="h6">
                            Email :
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">
                            {data && data.student.email}
                        </Typography>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>
                        <Typography variant="h6">
                            Status :
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">
                            {data && data.student.status}
                        </Typography>
                      </TableCell>
                  </TableRow>
                </Table>
            </TableContainer>
            {/* <Typography variant="h5" gutterBottom>
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
            </Typography> */}
            {role!=='USER'? 
                <div className={classes.marginTop}>
                    <Typography variant="h5">
                        Enrolled Courses
                    </Typography>
                {data && data.student.enrollments.map(enrollment=>(
                    
                    <List>
                        <ListItem button onClick={()=>(setOpen(!open))} >
                            <Typography variant="h5">
                                {enrollment.course.name}
                            </Typography>
                            
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List>
                            {enrollment.course.class.map(clas=>(
                                <ListItem >class room:{clas.room}</ListItem>
                            ))}
                            </List>
                        </Collapse>
                    </List>
                    
                ))}
                <Button onClick={()=>setUpdate(!update)}>Update</Button>
                </div>

                :
                <div>
                Enrolled Course List
                {data && data.student.enrollments.map(enrollment=>(
                    
                    <List>
                        <ListItem button onClick={()=>(setOpen(!open))} >
                            {enrollment.course.name}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List>
                            {enrollment.course.class.map(clas=>(
                                <ListItem >class room:{clas.room}</ListItem>
                            ))}
                            </List>
                        </Collapse>
                    </List>
                    
                ))}
                <Button onClick={()=>setUpdate(!update)}>Update</Button>
                </div>
            }
                
            

            </Fragment>
          )
        }
        </div>
    )
}
