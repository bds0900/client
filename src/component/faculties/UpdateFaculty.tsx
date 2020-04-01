import React, { ReactElement, useState } from 'react'
import { TextField, Button, InputLabel, Select, MenuItem, Typography } from '@material-ui/core'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ProgramType, StudentType, EnrollmentType, FacultyType } from '../Interfaces';
import { GET_PROGRAMS, UPDATE_STUDENT , CREATE_ENROLLMENT} from '../Query';
import SelectProgram from '../common/SelectProgram';
import SelectCourses from '../common/SelectCourses';
import CreateEnrollment from '../enrollment/CreateEnrollment';

interface Props {
    faculty:FacultyType
}
interface ProgramListData {
    programs: ProgramType[];
}
  
interface ProgramListVars {

}
interface FacultyData {
    updateFaculty: FacultyType;
}
  
interface FacultyVars {

}

interface EnrollmentData {
    enrollment:EnrollmentType;
}
  
interface EnrollmentVars {

}

export default function Signup(props: Props): ReactElement {
    const faculty=props.faculty
    const [firstName, setFirstName] = useState(faculty.firstName)
    const [lastName, setLastName] = useState(faculty.LastName)
    const [program, setProgram] = useState(faculty.program.id)
    const [password, setPassword] = useState(faculty.password)
    const [id, setID] = useState(faculty.id)
    const [email, setEmail] = useState(faculty.email)
    const [addCourse,setCourse]=useState(false)

    const result = useQuery<ProgramListData,ProgramListVars>(GET_PROGRAMS);

    const [saveFaculty, { error, data }]=  
    useMutation<FacultyData,FacultyVars>(
        UPDATE_STUDENT,
        {variables:{
            id:id,
            firstName:firstName,
            lastName:lastName,
            password:password,
            program_id:program
        }}
    )


    return (
        <div>
        <h3>Update User</h3>
            {addCourse?<CreateEnrollment student_id={id}></CreateEnrollment>:
            <div>
                {error ? <p>Oh no! {error.message}</p> : null}
                {data && data.updateFaculty 
                    ? 
                <div>
                <p>Saved!</p> 
                <Typography variant="h5" gutterBottom>
                    Student ID: {data && data.updateFaculty.id}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Student name: {data && data.updateFaculty.firstName} {data.updateFaculty.LastName}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Student Email: {data && data.updateFaculty.email}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Status: {data && data.updateFaculty.status}
                </Typography>
                </div>
                    : 
                <div>
                
                <Button color="primary" variant="text" onClick={() => 
                    setCourse(true) }>
                    Add courese
                </Button>
                <br/>

                    <TextField
                    disabled
                    placeholder="Enter your ID"
                    label="ID"
                    value={id}
                    />
                    <br/>
                    <TextField
                    placeholder="Enter your first name"
                    label="First Name"
                    value={firstName}
                    onChange={e=>{
                        setFirstName(e.target.value)

                        }}
                    />
                    <br/>
                    <TextField
                    placeholder="Enter your last name"
                    label="Last Name"
                    value={lastName}
                    onChange={e=>{
                        setLastName(e.target.value)

                    }}
                    />
                    <br/>
                    <TextField
                    placeholder="Enter your password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={e=>{
                        setPassword(e.target.value)

                    }}
                    />
                    <br/>
                    <TextField
                    disabled
                    placeholder="Enter your email"
                    label="Email"
                    value={email}
                    />
                    <br/>
                    
                    <Button color="primary" variant="text" onClick={() => 
                        id && firstName && lastName && password && program && saveFaculty() }>
                        Update User
                    </Button>
                </div>
                
                }
            </div>
            }
        </div>
    )
}


