import React, { ReactElement, Fragment, useState } from 'react'
import { StudentType,AttendanceSubscriptionPayload } from '../Interfaces'
import { useQuery,useSubscription } from '@apollo/react-hooks'
import {List,ListItem,Collapse,Typography, Button, makeStyles} from '@material-ui/core';
import UpdateStudent from './UpdateStudent'
import {  GET_STUDENT } from '../Query';
import {GET_ATTENDANCE_SUB} from '../Subscription'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
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
    const sub=useSubscription<CheckIn>(GET_ATTENDANCE_SUB);
    if(!sub.loading) refetch()
    const [open, setOpen] = useState(false);
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
