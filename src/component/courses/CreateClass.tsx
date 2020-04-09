import React, { ReactElement, useState } from 'react'
import {TextField,Button,FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import gql from 'graphql-tag';
import { useMutation, useQuery  } from '@apollo/react-hooks';

import {CourseType,ProgramType, EnrollmentType, InstructingType,ClassType} from '../Interfaces'
import {GET_PROGRAMS} from '../Query'
import {CREATE_COURSE,CREATE_INSTRUCTING,CREATE_CLASS} from '../Mutation'
import SelectProgram from '../common/SelectProgram';
import SelectCourses from '../common/SelectCourses';
interface Props {
    course_id:string
}
interface ClassData{
    class:ClassType
}
interface ClassVars{

}

export default function CreateClass(props: Props): ReactElement {


    const [id, setID] = useState(props.course_id)
    const [room, setRoom] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")


    console.log(props.course_id)
    console.log(room)
    console.log(start)
    console.log(end)
    const [saveClass, { error, data }]=useMutation<ClassData,ClassVars>(
        CREATE_CLASS,
        {
            variables:{
                course_id:props.course_id,
                room:room,
                start:start,
                end:end
            }
        }
    )

    return (
        <div>
        <h3>Add a Class</h3>
        {error ? <p>Oh no! {error.message}</p> : null}
        {data && data.class 
            ? 
        <p>Saved!</p> 
            : 
        
        <div className="CreateClass">
        <TextField
        placeholder="Enter the Room name"
        label="Room Name"
        value={room}
        onChange={e=>setRoom(e.target.value)}
        />
        <br/>
        <TextField
        placeholder="Enter the start time"
        label="Start Time"
        value={start}
        onChange={e=>setStart(e.target.value)}
        />
        <br/>
        <TextField
        placeholder="Enter the end time"
        label="End Time"
        value={end}
        onChange={e=>setEnd(e.target.value)}
        />
        <br/>


        <Button color="primary" variant="text" onClick={() => 
            room && start && end && saveClass() }>
            Add Class
        </Button>
        </div>
        }

        </div>
    )
}
