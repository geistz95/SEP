import React from 'react';


export default class StudentHolder extends React.Component{
    state={
        studentList :[

        ]
    }
    addStudent = (props)=>{
        let newStudent=[
            studentName=props.studentName,
            studentID=props.studentID,
            studentMajor=props.studentMajor,
            studentGoal=props.studentGoal
        ];
        let renewStudentList = [...this.state.studentList, newStudent];
        this.setState({
            studentList : renewStudentList
        })
    }

    toStudentPage = () => {
        return this.props.navigation.navigate('StudentPage',studentList)
    }

    render(){
        if (!isEmpty(props)){
            this.addStudent;   
            this.toStudentPage;
        }else{
            this.toStudentPage;
        }
    }
}