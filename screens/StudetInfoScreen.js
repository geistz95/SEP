import React from 'react';
import { View, FlatList, Text, StyleSheet, TextInput } from 'react-native';

export default class StudentInfoScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            studentName:'',
            studentID:'',
            studentMajor:'',
            studentGoal:'',
        }
    };
    handleSubmission=()=>{
        this.setState({filledForm}=false)
    }

    render(){
        if(this.state.filledForm){
            return(
        <View>
            <Text>What is your name?</Text>
            <TextInput>
                placeholder="Enter your name"
                onChangeText={text=>this.setState({studentName:text})}
            </TextInput>
            <Text>What is your ID Number</Text>
            <TextInput>
                placeholder="Enter your student ID"
                onChangeText={text=>this.setState({studentID:text})}
            </TextInput>
            <Text>What is your major?</Text>
            <TextInput>
                placeholder="Enter in your major"
                onChangeText={text=>this.setState({studentMajor:text})}
            </TextInput>
            <Text>What are your goals?</Text>
            <TextInput>
                placeholder="Enter in your goals"
                onChangeText={text=>this.setState({studentGoal:text})}
            </TextInput>
            <View>
                <Button title="Review" onPress={this.handleSubmission}/>
                <Button title="Back To Home" onPress={()=>this.props.navigation.navigate('Home')}/>
            </View>
        </View>
            )
        }else{
            <View>
                <Text>This is your submitted name : {studentName}</Text>
                <Text>This is your submitted ID : {studentID}</Text>
                <Text>This is your submitted major : {studentMajor}</Text>
                <Text>These are your submitted goals : {studentGoal}</Text>
                <View>
                    <Button title="Submit Info" newStudent = {this.state} onPress={()=>this.props.navigation.navigate('Student')}/>
                    <Button title="Back To Home" onPress={()=>this.props.navigation.navigate('Home')}/>
                </View>
            </View>
        }
    }
}