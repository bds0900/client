import React, { ReactElement, useState } from 'react'
import { TextField, Button, InputLabel, Select, MenuItem, Typography } from '@material-ui/core'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ProgramType, StudentType, FacultyType } from '../Interfaces';
import { GET_PROGRAMS, CREATE_STUDENT } from '../Query';
import SelectProgram from '../common/SelectProgram';

interface Props {
    
}
interface ProgramListData {
    programs: ProgramType[];
}
  
interface ProgramListVars {

}
interface FacultyData {
    createFaculty: FacultyType;
}
  


export default function CreateFaculty({}: Props): ReactElement {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [program, setProgram] = useState("")
    const [password, setPassword] = useState("")
    const [id, setID] = useState("")
    const [email, setEmail] = useState("")

    function onProgramClick(program_id:string):any{
        setProgram(program_id)
    }
    
    const result = useQuery<ProgramListData,ProgramListVars>(GET_PROGRAMS);

    const [saveFaculty, { error, data }]=  
    useMutation<FacultyData>(
        CREATE_STUDENT,
        {variables:{
            id:id,
            firstName:firstName,
            lastName:lastName,
            password:password,
            email:email,
            program_id:program
        }}
    )

    const genID=(min:number,max:number)=>{
        const user_id="999"+String(Math.floor(Math.random() * (max - min)) + min);
        
        setID(user_id)
        console.log(user_id)
        return user_id
    }
    
    const genEmail=(firstName:string,lastName:string,id:string)=>{
        
        const email= firstName[0]+
                lastName+
                id.substring(3)+
                "@conestogac.on.ca";
        setEmail(email)
        console.log(email)
        return email
    }
    return (
        <div>
        <h3>Add Faculty</h3>
            {error ? <p>Oh no! {error.message}</p> : null}
            {data && data.createFaculty 
                ? 
            <div>
            <p>Saved!</p> 
            <Typography variant="h5" gutterBottom>
                Student ID: {data && data.createFaculty.id}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Student name: {data && data.createFaculty.firstName} {data.createFaculty.LastName}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Student Email: {data && data.createFaculty.email}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Status: {data && data.createFaculty.status}
            </Typography>
            </div>
                : 
            <div>
                <form>
                <TextField
                    placeholder="Enter your first name"
                    label="First Name"
                    value={firstName}
                    onChange={e=>{
                        setFirstName(e.target.value)
                        genEmail(firstName,lastName,genID(1111,9999))
                        }}
                    />
                <br/>
                <TextField
                placeholder="Enter your last name"
                label="Last Name"
                value={lastName}
                onChange={e=>{
                    setLastName(e.target.value)
                    genEmail(firstName,lastName,genID(1111,9999))
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
                    genEmail(firstName,lastName,genID(1111,9999))
                }}
                />
                <br/>
                <SelectProgram programs={result.data?.programs} onProgramClick={onProgramClick}/>
                <br/>
                <Button color="primary" variant="text" onClick={() => 
                    id && firstName && lastName && email && program && saveFaculty()}>
                    Add
                </Button>
            </form>
            </div>
            }
        </div>
    )
}
