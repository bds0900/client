import React, { ReactElement, useState } from 'react'
import { TextField, Button, InputLabel, Select, MenuItem, Typography } from '@material-ui/core'
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ProgramType, StudentType, FacultyType } from '../Interfaces';
import { GET_PROGRAMS, CREATE_FACULTY } from '../Query';
import SelectProgram from '../common/SelectProgram';


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex= /(?!^.*[A-Z]{2,}.*$)^[A-Za-z]*$/;

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
    const [firstNameValid,setFirstNameValid]=useState<"success" | "error" | "warning" | undefined>();
    const [lastNameValid,setLastNameValid]=useState<"success" | "error" | "warning" | undefined>();
    const [passwordValid,setPasswrodValid] =useState<"success" | "error" | "warning" | undefined>();

    function onProgramClick(program_id:string):any{
        setProgram(program_id)
    }
    
    const result = useQuery<ProgramListData,ProgramListVars>(GET_PROGRAMS);

    const [saveFaculty, { error, data }]=  
    useMutation<FacultyData>(
        CREATE_FACULTY,
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
        const user_id="888"+String(Math.floor(Math.random() * (max - min)) + min);
        setID(user_id)
        return user_id
    }
    
    const genEmail=(firstName:string,lastName:string,id:string)=>{
        
        const email= firstName[0]+
                lastName+
                "@conestogac.on.ca";
        setEmail(email)

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
                Faculty ID: {data && data.createFaculty.id}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Faculty name: {data && data.createFaculty.firstName} {data.createFaculty.LastName}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Faculty Email: {data && data.createFaculty.email}
            </Typography>
            <Typography variant="h5" gutterBottom>
                Faculty: {data && data.createFaculty.status}
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
                        setFirstNameValid(nameRegex.test(e.target.value.toLowerCase()) ? 'success' : 'error')
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
                    setLastNameValid(nameRegex.test(e.target.value.toLowerCase()) ? 'success' : 'error')
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
                    setPasswrodValid(e.target.value.length < 8 ? 'error' : 'success')
                    genEmail(firstName,lastName,genID(1111,9999))
                }}
                />
                <br/>
                <SelectProgram programs={result.data?.programs} onProgramClick={onProgramClick}/>
                <br/>
                <Button color="primary" variant="text" 
                disabled={passwordValid !== 'success' || firstNameValid !== 'success' || lastNameValid !== 'success' }    
                onClick={() =>id && firstName && lastName && email && program && saveFaculty()}>
                    Add
                </Button>
            </form>
            </div>
            }
        </div>
    )
}

