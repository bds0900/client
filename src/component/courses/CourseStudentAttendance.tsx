import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_STUDENT_COURSE_ATTENDANCE } from '../Query'
import { AttendanceType, ClassType } from '../Interfaces'

interface Props {
    course_id:string,
    student_id:string
    classes:ClassType[]
}
interface AttendanceListData{
    attendances:AttendanceType[]
}

export default function CourseStudentAttendance(props: Props): ReactElement {
    const classes=props.classes;
    const {loading,data}=useQuery<AttendanceListData>(
        GET_STUDENT_COURSE_ATTENDANCE,
        {variables:{student_id:props.student_id,course_id:props.course_id}}
    )
    return (
        <div>
            {loading?
            <div>loading...</div>
            :
            <div>
            {data && data?.attendances.map(attendance=>(
                <li>{attendance.time}</li>
            ))}
            </div>
            }
        </div>
    )
}
