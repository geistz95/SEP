import {StyleSheet, View, FlatList, Text,Button,TextInput} from 'react-native';
import React from 'react';

export default class HomeScreen extends React.Component{
    render(){
        let studentID;
        return(
            <View>
            <Text>Welcome to the Home page!</Text>
            <View>
                <Button title="New Student" onPress={()=>this.props.navigation.navigate('StudentInfo')}/>
                <Button title="Existing Student" onPress={()=>this.props.navigation.navigate('StudentInfo')}/>
            </View>
            </View>
        )
    }
}