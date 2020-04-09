import React, { ReactElement, Fragment, useState } from 'react'
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { CourseType, Role, ClassSubscriptionPayload } from '../Interfaces';
import { NavLink } from 'react-router-dom';
import {Typography ,Button, makeStyles} from '@material-ui/core';
import {GET_COURSE } from '../Query'
import {GET_CLASS_SUB}from '../Subscription'
import UpdateCourse from './UpdateCourse';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import CourseStudentList from './CourseStudentList';
import CreateClass from './CreateClass';

interface CourseData{
    course:CourseType
}
interface CourseVars{
    coure_id:string
}
interface Props {
    match:any
}
interface AddClass{
    class:ClassSubscriptionPayload
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  container: {
    marginTop: 10,
  }
}));


export default function Course(props: Props): ReactElement {
    const classes = useStyles()
    const role=localStorage.getItem("role");
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const { loading, data, refetch } = useQuery<CourseData, CourseVars>(
        GET_COURSE,
        { variables: { coure_id: props.match.params.id } }
    );
    const sub=useSubscription<AddClass>(GET_CLASS_SUB);
    if(sub.data?.class) 
    {
      console.log(sub.data?.class)
      console.log("subscription get data")
      refetch()
    }
    return (
        <Fragment>
        {update ? (
          data && <UpdateCourse course={data.course}></UpdateCourse>
        ) : (
          <Fragment>
          <Typography variant="h5" gutterBottom>
            {data && data.course.id} - {data && data.course.name} 
          </Typography>
          <Typography variant="h6" gutterBottom>
            {data && data.course.program.name}
          </Typography>
          <Divider/>
          
          {role==Role.SUPERADMIN?
            <Grid container spacing={3} className={classes.container}>
            <Grid item xs={6}>
              <Typography variant="h6">
                Student List
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>ID</TableCell>
                  </TableHead>
                  <TableBody>
                    {data && data.course.enrollments && data.course.enrollments.map(enrollment=>(
                      <TableRow>
                        <TableCell key={enrollment.student.id}>
                          <NavLink to={"/student/"+enrollment.student.id}>
                            {enrollment.student.firstName} {enrollment.student.LastName}
                          </NavLink>
                        </TableCell>
                        <TableCell key={enrollment.student.id}>
                          <NavLink to={"/student/"+enrollment.student.id}>
                            {enrollment.student.id}
                          </NavLink>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                Class List
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Room</TableCell>
                      <TableCell align="center">Start Time</TableCell>
                      <TableCell align="center">End Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data && data.course.class && data.course.class.map((clas)=>(
                      <TableRow key={clas.id}>
                        <TableCell align="center">{clas.room}</TableCell>
                        <TableCell align="center">{clas.startTime}</TableCell>
                        <TableCell align="center">{clas.endTime}</TableCell>
                      </TableRow>
                  ))} 
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" onClick={()=>setUpdate(!update)}>update</Button>
            </Grid>
          </Grid>
            :
          role==Role.ADMIN?  
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={6}>
              <Typography variant="h6">
                Student List
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>ID</TableCell>
                  </TableHead>
                  <TableBody>
                    {data && data.course.enrollments && data.course.enrollments.map(enrollment=>(
                      <TableRow>
                        <TableCell key={enrollment.student.id}>
                          <NavLink to={"/student/"+enrollment.student.id}>
                            {enrollment.student.firstName} {enrollment.student.LastName}
                          </NavLink>
                        </TableCell>
                        <TableCell key={enrollment.student.id}>
                          <NavLink to={"/student/"+enrollment.student.id}>
                            {enrollment.student.id}
                          </NavLink>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                Class List
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Room</TableCell>
                      <TableCell align="center">Start Time</TableCell>
                      <TableCell align="center">End Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data && data.course.class && data.course.class.map((clas)=>(
                      <TableRow key={clas.id}>
                        <TableCell align="center">{clas.room}</TableCell>
                        <TableCell align="center">{clas.startTime}</TableCell>
                        <TableCell align="center">{clas.endTime}</TableCell>
                      </TableRow>
                  ))} 
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" onClick={()=>setUpdate(!update)}>update</Button>
            </Grid>
          </Grid>
            :
          
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={6}>
              <Typography variant="h6">
                Student List
              </Typography>
              {data && <CourseStudentList course_id={data.course.id} classes={data.course.class}/> }
              
              

            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                Class List
              </Typography>
              
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Room</TableCell>
                      <TableCell align="center">Start Time</TableCell>
                      <TableCell align="center">End Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data && data.course.class && data.course.class.map((clas)=>(
                      <TableRow key={clas.id}>
                        <TableCell align="center">{clas.room}</TableCell>
                        <TableCell align="center">{clas.startTime}</TableCell>
                        <TableCell align="center">{clas.endTime}</TableCell>
                      </TableRow>
                  ))} 
                  </TableBody>
                </Table>
              </TableContainer>
              {data && <CreateClass course_id={data.course.id}></CreateClass>}
            </Grid>

          </Grid>
          }
          
          </Fragment>

        )}
        
        </Fragment>
    )
}
