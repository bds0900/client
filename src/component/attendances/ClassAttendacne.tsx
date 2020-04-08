import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { AttendanceType } from '../Interfaces'
import { GET_COURSE_ATTENDANCE, GET_CLASS_ATTENDANCE } from '../Query'

interface Props {
    class_id:string
}
interface AttendanceData{
    attendances:AttendanceType[]
}
export default function ClassAttendance(props: Props): ReactElement {
    const {loading,data}=useQuery<AttendanceData,{}>(
        GET_CLASS_ATTENDANCE,
        {variables:{course_id:props.class_id}}
    )
    return (
        <div>
            {loading?
            <div>loading...</div>
            :
            <div>{data && data.attendances.map(attendance=>(
                attendance.time
            ))}
            </div>
            }
        </div>
    )
}
