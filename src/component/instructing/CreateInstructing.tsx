import React, { ReactElement, useState } from 'react'
import {TextField,Button,FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import gql from 'graphql-tag';
import { useMutation, useQuery  } from '@apollo/react-hooks';

import {CourseType,ProgramType, EnrollmentType, InstructingType} from '../Interfaces'
import {GET_PROGRAMS } from '../Query'
import {CREATE_COURSE,CREATE_INSTRUCTING} from '../Mutation'
import SelectProgram from '../common/SelectProgram';
import SelectCourses from '../common/SelectCourses';
interface Props {
    faculty_id:string
}
interface InstructingData{
    insctructing:InstructingType
}
interface InstructingVars{

}

export default function CreateInstructing(props: Props): ReactElement {


    const [id, setID] = useState(props.faculty_id)
    const [program, setProgram] = useState("")
    const [course, setCourse] = useState("")

    function onProgramClick(program_id:string):any{
        setProgram(program_id)
    }
    function onCourseClick(course_id:string):any{
        setCourse(course_id)
    }

    const [saveInstructing, { error, data }]=useMutation<InstructingData,InstructingVars>(
        CREATE_INSTRUCTING,
        {
            variables:{faculty_id:props.faculty_id,course_id:course}
        }
    )

    return (
        <div>
        <h3>Add a Course</h3>
        {error ? <p>Oh no! {error.message}</p> : null}
        {data && data.insctructing 
            ? 
        <p>Saved!</p> 
            : 
        <div>
        <SelectCourses onProgramClick={onProgramClick} onCourseClick={onCourseClick}/>
        <Button color="primary" variant="text" onClick={() => 
            id && course  && saveInstructing() }>
            Add Course
        </Button>
        </div>
        }

        </div>
    )
}

