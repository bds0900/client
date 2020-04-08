import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ClassType } from '../Interfaces'
import { GET_CLASSES } from '../Query'
import Class from './Class'
interface Props {
    
}
interface ClassListData{
    classes:ClassType[]
}
export default function ClassList({}: Props): ReactElement {
    const {loading,data}=useQuery<ClassListData,{}>(GET_CLASSES)
    return (
        <div>
            {loading?
            <div>loading...</div>
                :
            <div>
            {data && data.classes && data.classes.map(clas=>(
                <Class class={clas}/>
            ))}
            </div>
            }
        </div>
    )
}
