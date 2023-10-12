import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './screens/HomeScreen/'
import StudentInfoScreen from './screens/StudetInfoScreen'
import StudentHolder from './screens/StudentHolder'
import StudentPage from './screens/StudentPage'

const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initalRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="SubmitStudentInfo" component={StudentInfoScreen}/>
                <Stack.Screen name="StudentHolder" component={StudentHolder}/>
                <Stack.Screen name="StudentPage"  component={StudentPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
