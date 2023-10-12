import {StyleSheet, View, FlatList, Text,Button,TextInput} from 'react-native';
import React from 'react';

export default class StudentPage extends React.Component{
    state={
        studentList:props.studentList,
        enteredStudentID:'',
        enteredID:false
    }
    handleSubmission=()=>{
        this.setState(enteredID=true)
    }
    searchID=(enteredID)=>{
        for(var i = 0; i<studentList.length;i++){
            if(enteredID===studentList[i].studentID){
                return studentList[i];
            }
        }
    }

    render(){
        if(enteredID){
            let counter=0;
            selectedStudent=this.searchID(enteredStudentID);
            <View>
                <Text>Your name is : {selectedStudent.studentName}</Text>
                <Text>Your ID is : {selectedStudent.studentID}</Text>
                <Text>Your major is : {selectedStudent.studentMajor}</Text>
                <Text>Your Goals are : {selectedStudent.studentGoal}</Text>
                <Button title="Back To Home" onPress={()=>this.props.navigation.navigate('Home')}/>
            </View>
        }else{
            <View>
                <Text>Enter in your student ID to view</Text>
                <TextInput>
                    placeholder="Type in your student ID"
                    onChangeText={text=>this.setState({enteredStudentID:text})}
                </TextInput>
                <Button>
                    title="Submit"
                    onPress={this.handleSubmission}
                </Button>
                <Button title="Back To Home" onPress={()=>this.props.navigation.navigate('Home')}/>

            </View>
        }
    }
}