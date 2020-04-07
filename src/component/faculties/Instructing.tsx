import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_INSTRUCTING } from '../Query'
import { InstructingType } from '../Interfaces'

interface Props {
    faculty_id:string
}
interface InstructingData{
    instructing:InstructingType
}

export default function Instructing({}: Props): ReactElement {
    const {loading,data}=useQuery<InstructingData,{}>(
        GET_INSTRUCTING,
        {variables:{faculty_id:localStorage.getItem("id")}}
    )
    return (
        <div>
            
        </div>
    )
}
