import React, { ReactElement } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_ENROLLMENT } from '../Query'
import { EnrollmentType, InstructingType } from '../Interfaces'


interface InstructingData{
    instructing:InstructingType
}
interface InstructingVars{

}
interface Props {
    faculty_id:string;
    course_id:string
}

export default function Inscturcting(props: Props): ReactElement {
    const [saveEnrollment, { error, data }]=useMutation<InstructingData,InstructingVars>(
        CREATE_ENROLLMENT,
        {
            variables:{student_id:props.faculty_id,course_id:props.course_id}
        }
    )
    return (
        <div>
        {error ? <p>Oh no! {error.message}</p> : null}
        {data && data.instructing ? <p>Saved!</p> : null}
        {saveEnrollment()}
        </div>
    )
}