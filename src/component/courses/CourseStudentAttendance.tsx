import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_STUDENT_COURSE_ATTENDANCE } from '../Query'
import { AttendanceType, ClassType } from '../Interfaces'
import { Checkbox } from '@material-ui/core';

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
    function check(class_id:string,attendances:AttendanceType[]){
        let ret=false;
        for (const att of attendances){
            if(att.class.id==class_id){
                ret=true;
                break;
            }
        }
        return ret
    }


    return (
        <div>
            {loading?
            <div>loading...</div>
            :
            <div>
            {data && classes.map(clas=>(
                <li>
                {clas.room}{clas.startTime}{clas.endTime}{data && check(clas.id, data.attendances).toString()}
                </li>
            ))}
            </div>
            }
        </div>
    )
}
