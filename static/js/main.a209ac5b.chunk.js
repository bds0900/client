(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t,a){e.exports=a(137)},118:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),u=a(14),o=(a(118),a(42)),m=a.n(o),i=a(58),s=a(63),d=a(64),E=a(80),b=a(81),g=(a(103),a(22)),p=a(177),v=(a(182),a(183)),O=a(41),f=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Welcome")}}]),a}(n.Component),h=a(7),j=a(184),S=a(175),C=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function N(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),l=(a[0],a[1]),c=Object(n.useState)(!1),u=Object(h.a)(c,2),o=u[0],s=(u[1],Object(n.useState)("")),d=Object(h.a)(s,2),E=d[0],b=d[1],g=Object(n.useState)(""),p=Object(h.a)(g,2),v=p[0],f=p[1],N=Object(n.useState)(),$=Object(h.a)(N,2),y=$[0],w=$[1],_=Object(n.useState)(),k=Object(h.a)(_,2),D=k[0],P=k[1],I=function(){var e=Object(i.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),l(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,o?r.a.createElement(O.a,{to:"/"}):r.a.createElement("div",{className:"Login"},r.a.createElement("div",null,r.a.createElement(j.a,{placeholder:"Enter your Username",label:"Username",value:E,onChange:function(e){var t=e.target;b(t.value),w(C.test(t.value.toLowerCase())?"success":"error")}}),r.a.createElement("br",null),r.a.createElement(j.a,{type:"password",placeholder:"Enter your Password",label:"Password",value:v,onChange:function(e){var t=e.target;f(t.value),P(t.value.length<8?"error":"success")}}),r.a.createElement("br",null),r.a.createElement(S.a,{color:"primary",variant:"text",onClick:I,disabled:"success"!==D||"success"!==y},"Log in"))))}var $=a(38),y=a(11),w=a(23),_=a(24),k=a.n(_);function D(){var e=Object(w.a)(["\n    mutation CREATE_ENROLLMENT($student_id:ID,$course_id:ID){\n        createEnrollment(data:{\n            student:{\n                connect:{\n                    id:$student_id\n                }\n            }\n            course:{\n                connect:{\n                    id:$course_id\n                }\n            }\n        }){\n            student{\n                id\n            }\n            course{\n                id\n            }\n        }\n\n    }\n\n\n"]);return D=function(){return e},e}function P(){var e=Object(w.a)(["\n    mutation UPDATE_COURSE($id:ID!,$name:String!,$NOS:Int,$program:ID){\n        updateCourse(where:{id:$id},\n            data:{\n                name:$name\n                numOfStudent:$NOS\n                program:{\n                    connect:{\n                        id:$program\n                    }\n                }\n            }\n        ){\n            id\n            name\n            numOfStudent\n        }\n    }\n\n"]);return P=function(){return e},e}function I(){var e=Object(w.a)(["\n  query Get_COURSE($coure_id: ID!) {\n    course(where: {id:$coure_id}) {\n      id\n      name\n      numOfStudent\n      program{\n        name\n      }\n      enrollments{\n        student{\n          id\n          firstName\n          LastName\n        }\n      }\n\n    }\n  }\n"]);return I=function(){return e},e}function A(){var e=Object(w.a)(["\n  query GET_COURSES_BY_PROGRAM_ID($program_id:ID)\n  {\n    courses(where:{\n        program:{\n            id:$program_id\n        }\n    }){\n      id\n      name\n    }\n  }\n"]);return A=function(){return e},e}function L(){var e=Object(w.a)(["\n  {\n    courses {\n      id\n      name\n    }\n  }\n"]);return L=function(){return e},e}function x(){var e=Object(w.a)(["\n    mutation CREATE_COURSE($id:ID!,$name:String!,$NOS:Int!,$program_id:ID){\n        createCourse(data:{\n            id:$id\n            name:$name\n            numOfStudent:$NOS\n            program:{\n                connect:{id:$program_id}\n            }\n        }){\n            id\n            name\n            numOfStudent\n            program{\n                id\n                name\n            }\n        }\n    }\n\n"]);return x=function(){return e},e}function U(){var e=Object(w.a)(["\n    mutation UPDATE_PROGRAM($id:ID!,$name:String!){\n        updateProgram(where:{id:$id},\n            data:{name:$name}\n        ){\n            id\n            name\n        }\n    }\n\n"]);return U=function(){return e},e}function B(){var e=Object(w.a)(["\n    mutation CREATE_PROGRAM($id:ID!,$name:String!){\n        createProgram(data:{\n            id:$id\n            name:$name\n        }){\n            id\n            name\n        }\n    }\n\n"]);return B=function(){return e},e}function T(){var e=Object(w.a)(["\nquery GET_PROGRAM($id:ID){\n  program(where:{id:$id}){\n    id\n    name\n    courses{\n      id\n      name\n    }\n  }\n}\n"]);return T=function(){return e},e}function R(){var e=Object(w.a)(["\n{\n  programs(orderBy:name_ASC) {\n    id\n    name\n    courses{\n      id\n      name\n    }\n  }\n}\n"]);return R=function(){return e},e}function F(){var e=Object(w.a)(["\n    subscription GET_ATTENDANCE{\n        attendance{\n            mutation\n            node{\n                time\n                student{\n                    id\n                    firstName\n                    enrollments{\n                        course{\n                            attendances{\n                                time\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n  \n"]);return F=function(){return e},e}function G(){var e=Object(w.a)(['\n    mutation UPDATE_STUDENT(\n        $id:ID!,$firstName:String!,$lastName:String!,$password:String!,\n        $program_id:ID){\n        updateStudent(\n            where:{id:$id},\n            data:{\n                firstName:$firstName\n                LastName:$lastName\n                password:$password\n                status:"full-time"\n                program:{\n                    connect:{id:$program_id}\n                }\n            }\n        ){\n            id\n            firstName\n            LastName\n            email\n\n        }\n    }\n\n']);return G=function(){return e},e}function M(){var e=Object(w.a)(['\n    mutation CREATE_STUDENT(\n        $id:ID!,$firstName:String!,$lastName:String!,$password:String!,\n        $email:String!,$program_id:ID){\n        createStudent(data:{\n            id:$id\n            firstName:$firstName\n            LastName:$lastName\n            email:$email\n            password:$password\n            status:"full-time"\n            program:{\n                connect:{id:$program_id}\n            }\n        }){\n            id\n            firstName\n            LastName\n            email\n            program{\n                name\n            }\n        }\n    }\n\n']);return M=function(){return e},e}function H(){var e=Object(w.a)(["\n    query GET_STUDENT($student_id:ID){\n    student(where:{id:$student_id}){\n        id\n        firstName\n        LastName\n        email\n        status\n        program{\n            id\n            name\n        }\n        enrollments{\n            id\n            course{\n                id\n                name\n                attendances{\n                    time\n                }\n            }\n        }\n        \n    }\n  }\n"]);return H=function(){return e},e}function q(){var e=Object(w.a)(["\n{\n  students{\n    id\n    firstName\n    LastName\n  }\n}\n"]);return q=function(){return e},e}var z=k()(q()),W=k()(H()),J=k()(M()),Z=k()(G()),Y=k()(F()),K=k()(R()),Q=k()(T()),V=k()(B()),X=k()(U()),ee=k()(x()),te=k()(L()),ae=k()(A()),ne=k()(I()),re=k()(P()),le=k()(D()),ce=a(186),ue=a(181),oe=a(176);function me(e){var t=e.programs,a=Object(n.useState)(),l=Object(h.a)(a,2),c=l[0],u=l[1];return r.a.createElement("div",null,r.a.createElement(ce.a,null,"Program"),r.a.createElement(ue.a,{value:c,onChange:function(t){u(t.target.value),e.onProgramClick(t.target.value)}},null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement(oe.a,{key:e.id,value:e.id},e.name)}))))}function ie(e){var t;Object($.a)(e);var a=Object(n.useState)(""),l=Object(h.a)(a,2),c=l[0],u=l[1],o=Object(n.useState)(""),m=Object(h.a)(o,2),i=m[0],s=m[1],d=Object(n.useState)(""),E=Object(h.a)(d,2),b=E[0],g=E[1],v=Object(n.useState)(""),O=Object(h.a)(v,2),f=O[0],C=O[1],N=Object(n.useState)(""),w=Object(h.a)(N,2),_=w[0],k=w[1],D=Object(n.useState)(""),P=Object(h.a)(D,2),I=P[0],A=P[1];var L=Object(y.b)(K),x=Object(y.a)(J,{variables:{id:_,firstName:c,lastName:i,password:f,email:I,program_id:b}}),U=Object(h.a)(x,2),B=U[0],T=U[1],R=T.error,F=T.data,G=function(e,t){var a="999"+String(Math.floor(Math.random()*(t-e))+e);return k(a),console.log(a),a},M=function(e,t,a){var n=e[0]+t+a.substring(3)+"@conestogac.on.ca";return A(n),console.log(n),n};return r.a.createElement("div",null,r.a.createElement("h3",null,"Sign Up"),R?r.a.createElement("p",null,"Oh no! ",R.message):null,F&&F.createStudent?r.a.createElement("div",null,r.a.createElement("p",null,"Saved!"),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Student ID: ",F&&F.createStudent.id),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Student name: ",F&&F.createStudent.firstName," ",F.createStudent.LastName),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Student Email: ",F&&F.createStudent.email),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Status: ",F&&F.createStudent.status)):r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement(j.a,{placeholder:"Enter your first name",label:"First Name",value:c,onChange:function(e){u(e.target.value),M(c,i,G(1111,9999))}}),r.a.createElement("br",null),r.a.createElement(j.a,{placeholder:"Enter your last name",label:"Last Name",value:i,onChange:function(e){s(e.target.value),M(c,i,G(1111,9999))}}),r.a.createElement("br",null),r.a.createElement(j.a,{placeholder:"Enter your password",type:"password",label:"Password",value:f,onChange:function(e){C(e.target.value),M(c,i,G(1111,9999))}}),r.a.createElement("br",null),r.a.createElement(me,{programs:null===(t=L.data)||void 0===t?void 0:t.programs,onProgramClick:function(e){g(e)}}),r.a.createElement("br",null),r.a.createElement(S.a,{color:"primary",variant:"text",onClick:function(){return _&&c&&i&&I&&b&&B()}},"Sign Up"))))}var se=a(178),de=a(189),Ee=a(190),be=a(185),ge=a(180),pe=a(174),ve=a(140),Oe=a(78),fe=a.n(Oe),he=(a(62),Object(se.a)((function(e){return Object(de.a)({root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}})})));function je(e){var t,a=he(),l=Object(n.useState)(!1),c=Object(h.a)(l,2);c[0],c[1];return r.a.createElement("div",{className:a.root},r.a.createElement(Ee.a,null,r.a.createElement(be.a,{expandIcon:r.a.createElement(fe.a,null),"aria-controls":"panel1a-content",id:e.program.id},r.a.createElement(p.a,{className:a.heading},e.program.name),r.a.createElement(S.a,{href:"/program/"+e.program.id},"detail")),r.a.createElement(ge.a,null,r.a.createElement(pe.a,null,null===(t=e.program.courses)||void 0===t?void 0:t.map((function(e){return r.a.createElement(ve.a,{key:e.id},r.a.createElement(u.b,{to:"/course/"+e.id},r.a.createElement(p.a,null,e.name)))}))))))}function Se(e){Object($.a)(e);var t=Object(y.b)(K),a=t.loading,l=t.data;return r.a.createElement(n.Fragment,null,a?r.a.createElement("p",null,"Loading ..."):r.a.createElement(n.Fragment,null,r.a.createElement(pe.a,null,l&&l.programs.map((function(e){return r.a.createElement(ve.a,{key:e.id,className:"program-list"}," ",r.a.createElement(je,{program:e})," ")})))))}function Ce(e){var t=Object(n.useState)(e.program.name),a=Object(h.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(e.program.id),o=Object(h.a)(u,2),m=o[0],i=o[1],s=Object(y.a)(X,{variables:{id:m,name:l}}),d=Object(h.a)(s,2),E=d[0],b=d[1],g=b.error,p=b.data;return r.a.createElement("div",null,r.a.createElement("h3",null,"Update a Program"),g?r.a.createElement("p",null,"Oh no! ",g.message):null,p&&p.updateProgram?r.a.createElement("p",null,"Saved!"):r.a.createElement("div",{className:"CreateProgram"},r.a.createElement(j.a,{placeholder:"Enter the Program name",label:"Program Name",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{disabled:!0,placeholder:"Enter program ID",label:"Program ID",value:m,onChange:function(e){return i(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(S.a,{color:"primary",variant:"text",onClick:function(){return m&&l&&E()}},"Update Program")))}function Ne(e){var t,a=Object(n.useState)(!1),l=Object(h.a)(a,2),c=(l[0],l[1],Object(n.useState)(!1)),o=Object(h.a)(c,2),m=o[0],i=o[1],s=Object(y.b)(Q,{variables:{id:e.match.params.id}}),d=(s.loading,s.data);return r.a.createElement("div",null,m?r.a.createElement("div",null,d&&r.a.createElement(Ce,{program:d.program})):r.a.createElement("div",null,r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Program ID: ",d&&(null===d||void 0===d?void 0:d.program.id)),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Program name: ",d&&(null===d||void 0===d?void 0:d.program.name)),r.a.createElement(S.a,{onClick:function(){return i(!m)}},"update"),r.a.createElement(Ee.a,null,r.a.createElement(be.a,{expandIcon:r.a.createElement(fe.a,null),"aria-controls":"panel1a-content",id:null===d||void 0===d?void 0:d.program.id},r.a.createElement(p.a,null,null===d||void 0===d?void 0:d.program.name," Course List")),r.a.createElement(ge.a,null,r.a.createElement(pe.a,null,null===d||void 0===d||null===(t=d.program.courses)||void 0===t?void 0:t.map((function(e){return r.a.createElement(ve.a,{key:e.id},r.a.createElement(u.b,{to:"/course/"+e.id},r.a.createElement(p.a,null,e.name)))})))))))}function $e(e){var t=Object(y.b)(te),a=t.loading,l=t.data;return r.a.createElement("div",null,a?r.a.createElement("p",null,"Loading ..."):r.a.createElement(n.Fragment,null,"course list",r.a.createElement(pe.a,null,l&&l.courses.map((function(e){return r.a.createElement(ve.a,{key:e.id,className:"course-list"},r.a.createElement(u.b,{to:"/course/"+e.id}," ",e.name))})))))}function ye(e){var t,a=e.course,l=Object(n.useState)(a.name),c=Object(h.a)(l,2),u=c[0],o=c[1],m=Object(n.useState)(a.id),i=Object(h.a)(m,2),s=i[0],d=i[1],E=Object(n.useState)(a.program.name),b=Object(h.a)(E,2),g=b[0],p=b[1],v=Object(n.useState)(a.numOfStudent),O=Object(h.a)(v,2),f=O[0],C=O[1],N=Object(y.b)(K),$=Object(y.a)(re,{variables:{id:s,name:u,numOfStudent:f,program:g}}),w=Object(h.a)($,2),_=w[0],k=w[1],D=k.error,P=k.data;return r.a.createElement("div",null,r.a.createElement("h3",null,"Update a Course"),D?r.a.createElement("p",null,"Oh no! ",D.message):null,P&&P.updateCourse?r.a.createElement("p",null,"Saved!"):r.a.createElement("div",{className:"UpdateCourse"},r.a.createElement(j.a,{placeholder:"Enter the Course name",label:"Course Name",value:u,onChange:function(e){return o(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{disabled:!0,placeholder:"Enter Course ID",label:"Course ID",value:s,onChange:function(e){return d(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{placeholder:"Enter Number of Student",label:"Number of Student",value:f,onChange:function(e){return C(Number(e.target.value))}}),r.a.createElement("br",null),"Current program is ",e.course.program.name,r.a.createElement(ce.a,null,"Program"),r.a.createElement(ue.a,{value:g,onChange:function(e){return p(e.target.value)}},N.loading?r.a.createElement(oe.a,{disabled:!0},"loading...."):null===(t=N.data)||void 0===t?void 0:t.programs.map((function(e){return r.a.createElement(oe.a,{key:e.id,value:e.id},e.name)}))),r.a.createElement("br",null),r.a.createElement(S.a,{color:"primary",variant:"text",onClick:function(){return s&&u&&f&&g&&_()}},"Update Course")))}function we(e){console.log(e.match.params.id);var t=Object(n.useState)(!1),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(y.b)(ne,{variables:{coure_id:e.match.params.id}}),m=(o.loading,o.data);return r.a.createElement(n.Fragment,null,l?m&&r.a.createElement(ye,{course:m.course}):r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Course ID: ",m&&m.course.id),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Program name: ",m&&m.course.program.name),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Course name: ",m&&m.course.name),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Students: ",m&&m.course.numOfStudent),"Student List",m&&m.course.enrollments.map((function(e){return r.a.createElement(u.b,{to:"/student/"+e.student.id},r.a.createElement(ve.a,{key:e.student.id},e.student.firstName," ",e.student.LastName))})),r.a.createElement(S.a,{onClick:function(){return c(!l)}},"update")))}function _e(e){var t=Object(y.b)(z),a=t.loading,l=t.data;return r.a.createElement("div",null,"Student list",a?r.a.createElement("p",null,"Loading ..."):r.a.createElement(n.Fragment,null,l&&l.students.map((function(e){return r.a.createElement("li",{key:e.id,className:"student-list"},r.a.createElement(u.b,{to:"/student/"+e.id}," ",e.firstName," ",e.LastName))}))))}var ke=a(179);a(79),a(99);function De(e){var t,a,l=Object(n.useState)(""),c=Object(h.a)(l,2),u=c[0],o=c[1],m=Object(n.useState)(),i=Object(h.a)(m,2),s=i[0],d=i[1],E=Object(y.b)(K),b=E.loading,g=E.data,p=Object(y.b)(ae,{variables:{program_id:u}});var v=r.a.useState({}),O=Object(h.a)(v,2);O[0],O[1];return r.a.createElement("div",null,b?r.a.createElement("div",null,"loading...."):r.a.createElement(me,{programs:null===g||void 0===g?void 0:g.programs,onProgramClick:function(t){o(t),e.onProgramClick(t)}}),r.a.createElement("br",null),r.a.createElement(ue.a,{value:s,onChange:function(t){d(t.target.value),e.onCourseClick(t.target.value)}},null===(t=p.data)||void 0===t||null===(a=t.courses)||void 0===a?void 0:a.map((function(e){return r.a.createElement(oe.a,{key:e.id,value:e.id},e.name)}))))}function Pe(e){var t=Object(n.useState)(e.student_id),a=Object(h.a)(t,2),l=a[0],c=(a[1],Object(n.useState)("")),u=Object(h.a)(c,2),o=(u[0],u[1]),m=Object(n.useState)(""),i=Object(h.a)(m,2),s=i[0],d=i[1];console.log(l);var E=Object(y.a)(le,{variables:{student_id:e.student_id,course_id:s}}),b=Object(h.a)(E,2),g=b[0],p=b[1],v=p.error,O=p.data;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add a Course"),v?r.a.createElement("p",null,"Oh no! ",v.message):null,O&&O.enrollment?r.a.createElement("p",null,"Saved!"):r.a.createElement("div",null,r.a.createElement(De,{onProgramClick:function(e){o(e)},onCourseClick:function(e){d(e)}}),r.a.createElement(S.a,{color:"primary",variant:"text",onClick:function(){return l&&s&&g()}},"Update User")))}function Ie(e){var t=e.student,a=Object(n.useState)(t.firstName),l=Object(h.a)(a,2),c=l[0],u=l[1],o=Object(n.useState)(t.LastName),m=Object(h.a)(o,2),i=m[0],s=m[1],d=Object(n.useState)(t.program.id),E=Object(h.a)(d,2),b=E[0],g=(E[1],Object(n.useState)(t.password)),v=Object(h.a)(g,2),O=v[0],f=v[1],C=Object(n.useState)(t.id),N=Object(h.a)(C,2),$=N[0],w=(N[1],Object(n.useState)(t.email)),_=Object(h.a)(w,2),k=_[0],D=(_[1],Object(n.useState)(!1)),P=Object(h.a)(D,2),I=P[0],A=P[1],L=(Object(y.b)(K),Object(y.a)(Z,{variables:{id:$,firstName:c,lastName:i,password:O,program_id:b}})),x=Object(h.a)(L,2),U=x[0],B=x[1],T=B.error,R=B.data;return r.a.createElement("div",null,r.a.createElement("h3",null,"Update User"),I?r.a.createElement(Pe,{student_id:$}):r.a.createElement("div",null,T?r.a.createElement("p",null,"Oh no! ",T.message):null,R&&R.updateStudent?r.a.createElement("div",null,r.a.createElement("p",null,"Saved!"),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Student ID: ",R&&R.updateStudent.id),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Student name: ",R&&R.updateStudent.firstName," ",R.updateStudent.LastName),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Student Email: ",R&&R.updateStudent.email),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},"Status: ",R&&R.updateStudent.status)):r.a.createElement("div",null,r.a.createElement(S.a,{color:"primary",variant:"text",onClick:function(){return A(!0)}},"Add courese"),r.a.createElement("br",null),r.a.createElement(j.a,{disabled:!0,placeholder:"Enter your ID",label:"ID",value:$}),r.a.createElement("br",null),r.a.createElement(j.a,{placeholder:"Enter your first name",label:"First Name",value:c,onChange:function(e){u(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{placeholder:"Enter your last name",label:"Last Name",value:i,onChange:function(e){s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{placeholder:"Enter your password",type:"password",label:"Password",value:O,onChange:function(e){f(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{disabled:!0,placeholder:"Enter your email",label:"Email",value:k}),r.a.createElement("br",null),r.a.createElement(S.a,{color:"primary",variant:"text",onClick:function(){return $&&c&&i&&O&&b&&U()}},"Update User"))))}function Ae(e){console.log(e.match.params.id);var t=Object(y.b)(W,{variables:{student_id:e.match.params.id}}),a=(t.loading,t.data),l=t.refetch;Object(y.c)(Y).loading||l();var c=Object(n.useState)(!0),u=Object(h.a)(c,2),o=u[0],m=u[1],i=Object(n.useState)(!1),s=Object(h.a)(i,2),d=s[0],E=s[1];return r.a.createElement("div",null,d?a&&r.a.createElement(Ie,{student:a.student}):r.a.createElement(n.Fragment,null,console.log(a),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},a&&a.student.firstName," ",a&&a.student.LastName),r.a.createElement(p.a,{variant:"h5",gutterBottom:!0},a&&a.student.email),a&&a.student.enrollments.map((function(e){return r.a.createElement(pe.a,null,r.a.createElement(ve.a,{button:!0,onClick:function(){return m(!o)}},e.course.name),r.a.createElement(ke.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(pe.a,null,e.course.attendances.map((function(e){return r.a.createElement(ve.a,null,e.time)})))))})),r.a.createElement(S.a,{onClick:function(){return E(!d)}},"Update")))}function Le(e){Object($.a)(e);var t=Object(n.useState)(""),a=Object(h.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(""),o=Object(h.a)(u,2),m=o[0],i=o[1],s=Object(y.a)(V,{variables:{id:m,name:l}}),d=Object(h.a)(s,2),E=d[0],b=d[1],g=b.error,p=b.data;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add a Program"),g?r.a.createElement("p",null,"Oh no! ",g.message):null,p&&p.createProgram?r.a.createElement("p",null,"Saved!"):r.a.createElement("div",{className:"CreateProgram"},r.a.createElement(j.a,{placeholder:"Enter the Program name",label:"Program Name",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{placeholder:"Enter program ID",label:"Program ID",value:m,onChange:function(e){return i(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(S.a,{color:"primary",variant:"text",onClick:function(){return m&&l&&E()}},"Create Program")))}function xe(e){var t;Object($.a)(e);var a=Object(n.useState)(""),l=Object(h.a)(a,2),c=l[0],u=l[1],o=Object(n.useState)(""),m=Object(h.a)(o,2),i=m[0],s=m[1],d=Object(n.useState)(""),E=Object(h.a)(d,2),b=E[0],g=E[1],p=Object(n.useState)(""),v=Object(h.a)(p,2),O=v[0],f=v[1];var C=Object(y.a)(ee,{variables:{id:i,name:c,NOS:Number(b),program_id:O}}),N=Object(h.a)(C,2),w=N[0],_=N[1],k=_.error,D=_.data,P=Object(y.b)(K);return r.a.createElement("div",null,r.a.createElement("h3",null,"Add a Course"),k?r.a.createElement("p",null,"Oh no! ",k.message):null,D&&D.createCourse?r.a.createElement("p",null,"Saved!"):r.a.createElement("form",null,r.a.createElement("div",{className:"CreateCourse"},r.a.createElement(j.a,{placeholder:"Enter the course name",label:"Course Name",value:c,onChange:function(e){return u(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{placeholder:"Enter course ID",label:"Course ID",value:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{placeholder:"Enter number of student",label:"Number of student",value:b,onChange:function(e){return g(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(me,{programs:null===(t=P.data)||void 0===t?void 0:t.programs,onProgramClick:function(e){f(e)}}),r.a.createElement("br",null),r.a.createElement(S.a,{color:"primary",variant:"text",onClick:function(){return i&&c&&b&&O&&w()}},"Create Course"))))}var Ue=function(e){return r.a.createElement(O.d,null,r.a.createElement(O.b,{path:"/",exact:!0,render:function(t){return r.a.createElement(f,Object.assign({},t,e))}}),r.a.createElement(O.b,{path:"/signup",exact:!0,render:function(t){return r.a.createElement(ie,Object.assign({},t,e))}}),r.a.createElement(O.b,{path:"/login",exact:!0,render:function(t){return r.a.createElement(N,Object.assign({},t,e))}}),r.a.createElement(O.b,{path:"/program/create",exact:!0,component:Le}),r.a.createElement(O.b,{path:"/programs",exact:!0,component:Se}),r.a.createElement(O.b,{path:"/program/:id",exact:!0,component:Ne}),r.a.createElement(O.b,{path:"/program/update/:id",exact:!0,component:Ce}),r.a.createElement(O.b,{path:"/course/create",exact:!0,component:xe}),r.a.createElement(O.b,{path:"/courses",exact:!0,component:$e}),r.a.createElement(O.b,{path:"/course/:id",exact:!0,component:we}),r.a.createElement(O.b,{path:"/students",exact:!0,component:_e}),r.a.createElement(O.b,{path:"/student/:id",exact:!0,component:Ae}),r.a.createElement(O.b,{path:"/"},"Not Found"))},Be=a(27),Te=a(101),Re=a(102),Fe=a(100),Ge=a(4),Me=a(43),He=new Re.a({uri:"https://murmuring-fortress-24950.herokuapp.com/"}),qe=new Fe.a({uri:"wss://murmuring-fortress-24950.herokuapp.com/",options:{reconnect:!0}}),ze=Object(Be.d)((function(e){var t=e.query,a=Object(Ge.l)(t);return"OperationDefinition"===a.kind&&"subscription"===a.operation}),qe,He),We=new Me.a({link:ze,cache:new Te.a});a(136);var Je=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).userHasAuthenticated=function(e){l.setState({isAuthenticated:e})},l.handleLogout=Object(i.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.userHasAuthenticated(!1),l.props.history.push("/login");case 2:case"end":return e.stop()}}),e)}))),l.handleChange=function(e,t){l.setState({value:t})},l.showLoggedInBar=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{"aria-label":"breadcrumb"},r.a.createElement(u.b,{to:"/"},"Home"),r.a.createElement(u.b,{to:"/programs"},"Programs"),r.a.createElement(u.b,{to:"/courses"},"Courses"),r.a.createElement(u.b,{to:"/students"},"Users"),r.a.createElement(u.b,{to:"/program/create"},"Create program"),r.a.createElement(u.b,{to:"/course/create"},"Create Course"),r.a.createElement(u.b,{to:"/signup"},"Sign Up")))},l.showLoggedOutBar=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{"aria-label":"breadcrumb"},r.a.createElement(u.b,{to:"/"},"Home"),r.a.createElement(u.b,{to:"/login"},"Login")))},l.state={isAuthenticated:!0,isAuthenticating:!0,value:0},document.title="Pi-Client Demo",l}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isAuthenticating:!1});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return r.a.createElement(g.a,{client:We},r.a.createElement("div",null,this.state.isAuthenticated?this.showLoggedInBar():this.showLoggedOutBar(),r.a.createElement(Ue,{isAuthenticated:e.isAuthenticated,userHasAuthenticated:e.userHasAuthenticated})))}}]),a}(n.Component);c.a.render(r.a.createElement(u.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Je,null))),document.getElementById("root"))},62:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.a209ac5b.chunk.js.map