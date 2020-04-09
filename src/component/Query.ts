import gql from "graphql-tag";

export const GET_STUDENTS = gql`
{
  students{
    id
    firstName
    LastName
  }
}
`;
export const GET_STUDENT=gql`
    query GET_STUDENT($student_id:ID){
    student(where:{id:$student_id}){
        id
        firstName
        LastName
        email
        status
        program{
            id
            name
        }
        enrollments{
            id
            course{
                id
                name
                attendances{
                    time
                }
                class{
                    room
                    startTime
                    endTime
                }
            }
        }
    }
  }
`;

export const GET_STUDENTS_BY_COURSE=gql`
    query GET_STUDENTS_BY_COURSE($course_id:ID){
        students(where:{enrollments_some:{course:{id:$course_id}}}){
            id
            firstName
            LastName
            email
        }
    }
`;

export const CREATE_STUDENT=gql`
    mutation CREATE_STUDENT(
        $id:ID!,$firstName:String!,$lastName:String!,$password:String!,
        $email:String!,$program_id:ID){
        createStudent(data:{
            id:$id
            firstName:$firstName
            LastName:$lastName
            email:$email
            password:$password
            status:"full-time"
            program:{
                connect:{id:$program_id}
            }
        }){
            id
            firstName
            LastName
            email
            program{
                name
            }
        }
    }

`;
export const UPDATE_STUDENT=gql`
    mutation UPDATE_STUDENT(
        $id:ID!,$firstName:String!,$lastName:String!,$password:String!,
        $program_id:ID){
        updateStudent(
            where:{id:$id},
            data:{
                firstName:$firstName
                LastName:$lastName
                password:$password
                status:"full-time"
                program:{
                    connect:{id:$program_id}
                }
            }
        ){
            id
            firstName
            LastName
            email

        }
    }

`;



export const GET_ATTENDANCE=gql`
    subscription GET_ATTENDANCE{
        attendance{
            mutation
            node{
                time
                student{
                    id
                    firstName
                    enrollments{
                        course{
                            attendances{
                                time
                            }
                        }
                    }
                }
            }
        }
    }
  
`;


export const GET_PROGRAMS = gql`
{
  programs(orderBy:name_ASC) {
    id
    name
    courses{
      id
      name
    }
  }
}
`;
export const GET_PROGRAMS_BY_FAULTY_ID = gql`
query GET_PROGRAMS_BY_FAULTY_ID($id:ID){
  programs(orderBy:name_ASC
  where:{
      faculties_some:{
          id:$id
      }
  }) {
    id
    name
    courses{
      id
      name
    }
  }
}
`;

export const GET_PROGRAM = gql`
query GET_PROGRAM($id:ID){
  program(where:{id:$id}){
    id
    name
    courses{
      id
      name
    }
  }
}
`;

export const CREATE_PROGRAM=gql`
    mutation CREATE_PROGRAM($id:ID!,$name:String!){
        createProgram(data:{
            id:$id
            name:$name
        }){
            id
            name
        }
    }

`;

export const UPDATE_PROGRAM=gql`
    mutation UPDATE_PROGRAM($id:ID!,$name:String!){
        updateProgram(where:{id:$id},
            data:{name:$name}
        ){
            id
            name
        }
    }

`;




export const CREATE_COURSE=gql`
    mutation CREATE_COURSE($id:ID!,$name:String!,$NOS:Int!,$program_id:ID){
        createCourse(data:{
            id:$id
            name:$name
            numOfStudent:$NOS
            program:{
                connect:{id:$program_id}
            }
        }){
            id
            name
            numOfStudent
            program{
                id
                name
            }
        }
    }

`;
export const GET_COURSES = gql`
  {
    courses {
      id
      name
    }
  }
`;

export const GET_COURSES_BY_PROGRAM_ID = gql`
  query GET_COURSES_BY_PROGRAM_ID($program_id:ID)
  {
    courses(where:{
        program:{
            id:$program_id
        }
    }){
      id
      name
    }
  }
`;
export const GET_COURSES_BY_FACULTY_ID = gql`
  query GET_COURSES_BY_FACULTY_ID($id:ID) {
    courses(where: {
        instructings_some:{
            faculty:{
                id:$id
            }
        }}) {
      id
      name
      numOfStudent
      program{
        name
      }
      enrollments{
        student{
          id
          firstName
          LastName
        }
        course{
            class{
                id
                room
                startTime
                endTime
            }
        }
      }
      class{
          id
          room
          startTime
          endTime
      }

    }
  }
`;
export const GET_COURSE = gql`
  query Get_COURSE($coure_id: ID!) {
    course(where: {id:$coure_id}) {
      id
      name
      numOfStudent
      program{
        name
      }
      enrollments{
        student{
          id
          firstName
          LastName
        }
        course{
            class{
                id
                room
                startTime
                endTime
            }
        }
      }
      class{
          id
          room
          startTime
          endTime
      }

    }
  }
`;


export const UPDATE_COURSE=gql`
    mutation UPDATE_COURSE($id:ID!,$name:String!,$NOS:Int,$program:ID){
        updateCourse(where:{id:$id},
            data:{
                name:$name
                numOfStudent:$NOS
                program:{
                    connect:{
                        id:$program
                    }
                }
            }
        ){
            id
            name
            numOfStudent
        }
    }

`;

export const CREATE_ENROLLMENT=gql`
    mutation CREATE_ENROLLMENT($student_id:ID,$course_id:ID){
        createEnrollment(data:{
            student:{
                connect:{
                    id:$student_id
                }
            }
            course:{
                connect:{
                    id:$course_id
                }
            }
        }){
            student{
                id
            }
            course{
                id
            }
        }

    }


`;


export const GET_FACULTIES=gql`
    query{
        faculties{
            id
            firstName
            LastName
            email
            status
            instructings{
                id
                course{
                    name
                    attendances{
                        time
                    }
                    class{
                        room
                        startTime
                        endTime
                    }
                }
            }
            program{
                id
                name
            }
            
        }
    }
`;
export const  GET_FACULTY=gql`
    query($faculty_id:ID){
        faculty(where:{id:$faculty_id}){
            id
            firstName
            LastName
            email
            status
            instructings{
                id
                course{
                    name
                    attendances{
                        time
                    }
                    class{
                        room
                        startTime
                        endTime
                    }
                }
            }
            program{
                id
                name
            }

        }
    }

`;
export const  GET_FACULTY_BY_EMAIL=gql`
    query($faculty_id:ID){
        faculty(where:{id:$faculty_id}){
            id
            firstName
            LastName
            email
            status
            instructings{
                id
                course{
                    name
                    attendances{
                        time
                    }
                    class{
                        room
                        startTime
                        endTime
                    }
                }
            }
            program{
                id
                name
            }

        }
    }

`;

export const CREATE_FACULTY=gql`
    mutation CREATE_FACULTY(
        $id:ID!,$firstName:String!,$lastName:String!,$password:String!,
        $email:String!,$program_id:ID){
        createFaculty(data:{
            id:$id
            firstName:$firstName
            LastName:$lastName
            email:$email
            password:$password
            status:"USER"
            program:{
                connect:{id:$program_id}
            }
        }){
            id
            firstName
            LastName
            email
            program{
                name
            }
        }
    }

`;
export const LOGIN=gql`
    mutation LOGIN($email:String!,$password: String!){
        login(data:{
            email: $email
            password: $password
        }){
            Faculty{
                id,
                firstName,
                LastName,
                email
                status
            },
            token
        }
    }
`;

export const CREATE_INSTRUCTING=gql`
    mutation CREATE_INSTRUCTING($faculty_id:ID,$course_id:ID){
        createInstructing(data:{
            faculty:{
                connect:{id:$faculty_id}
            }
            course:{
                connect:{id:$course_id}
            }
        }){
            faculty{
                id
            }
            course{
                id
            }
        }
    }
`;
export const UPDATE_FACULTY=gql`
    mutation UPDATE_FACULTY(
        $id:ID!,$firstName:String!,$lastName:String!,$password:String!,
        $program_id:ID){
        updateFaculty(
            where:{id:$id},
            data:{
                firstName:$firstName
                LastName:$lastName
                password:$password
                status:"USER"
                program:{
                    connect:{id:$program_id}
                }
            }
        ){
            id
            firstName
            LastName
            email
            status
        }
    }

`;
export const CREATE_CLASS=gql`
    mutation CREATE_CLASS($course_id:ID,$room:String!,$start:String!,$end:String!){
        createClass(data:{
            room:$room
            startTime:$start
            endTime:$end
            course:{
                connect:{id:$course_id}
            }
        }){
            id
        }
    }
`;
export const GET_INSTRUCTINGS=gql`
    query GET_INSTRUCTINGS($faculty_id:ID){
        instructings(where:{faculty:{id:$faculty_id}}){
            course{
                name
                id
            }
        }
    }
`;
export const GET_COURSE_ATTENDANCE=gql`
    query GET_COURSE_ATTENDANCE($course_id:ID){
        attendances(where:{course:{id:$course_id}}){
            id
            student{
                firstName
                LastName
                id
            }
            time
        }
    }
`;

export const GET_CLASS_ATTENDANCE=gql`
    query GET_CLASS_ATTENDANCE($class_id:ID){
        attendances(where:{class:{id:$class_id}}){
            student{
                firstName
                LastName
                id
            }
            time
        }
    }
`;
export const GET_STUDENT_COURSE_ATTENDANCE=gql`
    query GET_CLASS_ATTENDANCE($course_id:ID,$student_id:ID){
        attendances(where:{
            student:{id:$student_id},
            course:{id:$course_id}
            }){
            id
            student{
                firstName
                LastName
            }
            class{
                id
            }
            time
        }
    }
`;
export const GET_CLASSES=gql`
    query GET_CLASSES{
        classes{
            id
            startTime
            endTime
            course{
                id
                name
                attendances{
                    course{
                        name
                    }
                }
            }
        }
    }
`;
export const GET_CLASS=gql`
    query GET_CLASS($class_id:ID){
        class(where:{id:$class_id}){
            startTime
            endTime
            course{
                id
                name
                attendances{
                    course{
                        name
                    }
                }
            }
        }
    }
`;
export const GET_CLASSES_BY_COURSE=gql`
    query GET_CLASSES_BY_COURSE($course_id:ID){
        classes(where:{course:{id:$course_id}}){
            startTime
            endTime
            course{
                id
                name
                attendances{
                    course{
                        name
                    }
                }
            }
        }
    }
`;