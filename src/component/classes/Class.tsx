import React, { ReactElement } from 'react'
import { ClassType } from '../Interfaces'
import { useQuery } from '@apollo/react-hooks'
import { GET_CLASS } from '../Query'

interface Props {
    class:ClassType
}

export default function Class(props: Props): ReactElement {
    //const {loading,data}=useQuery<ClassData,{}>(GET_CLASS)
    return (
        <div>
            <h5>class room:{props.class.room}</h5>
            <h5>class start:{props.class.startTime}</h5>
            <h5>class end:{props.class.endTime}</h5>
        </div>
    )
}
