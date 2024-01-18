import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createContainer } from "react-navigation";
import Login from "../screens/Login";
import Register from "../screens/Register";

const screens = {
    Login: {
        screen: Login
    },
    Register: {
        screen: Register 
    }
}

const MyStack = createNativeStackNavigator(screens)

export default createContainer(MyStack)